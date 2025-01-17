export interface Project {
	description: string;
	homepage?: string;
	icon?: string;
	languages?: Array<string>;
	name: string;
	post?: string;
	state: string;
	private: boolean;
	template?: boolean;
	url: string;
	repository?: string;
	coverImage?: string;
}

export interface ProjectSection {
	section: string;
	about: string;
	slug: string;
	projects: Array<Project>;
}