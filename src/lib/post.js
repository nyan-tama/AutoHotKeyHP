import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostsData = () => {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const slug = fileName.replace(/\.md$/, '');
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		// マークダウンのメタデータ部分を解析するためのライブラリを利用
		const matterResult = matter(fileContents);

		return {
			slug,
			...matterResult.data,
		};
	});
	return allPostsData;
};
