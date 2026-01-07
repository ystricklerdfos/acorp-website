import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email,
      password,
      name,
      bio,
      location,
      projectName,
      projectDescription,
      entityType,
      genre,
      members,
      catalogue
    } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Create user with profile and project in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Create user
      const user = await tx.user.create({
        data: {
          email,
          name,
          passwordHash,
        },
      });

      // Create user profile if bio or location provided
      if (bio || location) {
        await tx.userProfile.create({
          data: {
            userId: user.id,
            bio: bio || null,
            location: location || null,
          },
        });
      }

      // Create project if project data provided
      if (projectName && projectDescription && entityType) {
        const project = await tx.project.create({
          data: {
            name: projectName,
            description: projectDescription,
            entityType: entityType,
            genre: genre ? [genre] : [],
            ownerId: user.id,
            catalogueData: catalogue && catalogue.length > 0 ? catalogue : null,
          },
        });

        // Create project members if provided
        if (members && members.length > 0) {
          for (const member of members) {
            if (member.name && member.role) {
              await tx.projectMember.create({
                data: {
                  projectId: project.id,
                  name: member.name,
                  role: member.role,
                },
              });

              // Create ownership breakdown if ownership percentage provided
              if (member.ownership > 0) {
                await tx.ownershipBreakdown.create({
                  data: {
                    projectId: project.id,
                    memberName: member.name,
                    percentage: member.ownership,
                  },
                });
              }
            }
          }
        }
      }

      return user;
    });

    // Remove sensitive data
    const { passwordHash: _, ...userWithoutPassword } = result;

    return NextResponse.json(userWithoutPassword, { status: 201 });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
