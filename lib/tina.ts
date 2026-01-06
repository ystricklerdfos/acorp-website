import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface Post {
  slug: string;
  title: string;
  author?: string;
  date?: string;
  category?: string;
  excerpt?: string;
  content: string;
}

export function getContentBySlug(collection: string, slug: string): Post | null {
  try {
    const fullPath = path.join(contentDirectory, collection, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      author: data.author,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllContent(collection: string): Post[] {
  try {
    const collectionPath = path.join(contentDirectory, collection);

    if (!fs.existsSync(collectionPath)) {
      return [];
    }

    const files = fs.readdirSync(collectionPath);
    const posts = files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, '');
        return getContentBySlug(collection, slug);
      })
      .filter((post): post is Post => post !== null);

    return posts;
  } catch (error) {
    return [];
  }
}
