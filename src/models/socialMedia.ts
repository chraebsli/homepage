import React from "react";

export default class SocialMedia {
	href: string;
	icon: React.ReactNode;
	name: string;
	user: string;

	constructor(s: { href: string; icon: React.ReactNode; name: string; user: string }) {
		this.href = s.href;
		this.icon = s.icon;
		this.name = s.name;
		this.user = s.user;
	}
}
