export type SidebarNavItem = {
	title: string
	disabled?: boolean
	external?: boolean
	icon?: keyof typeof Icons
} & (
		| {
			href: string
			items?: never
		}
		| {
			href?: string
			items: NavLink[]
		}
	)

export type CasinoEntry = {
	rating: number;
	title: string;
	main_bonus_title: string;
	hasRegularOffers: boolean;
	hasLiveCasino: boolean;
	hasVIPProgram: boolean;
	hasLiveChat: boolean;
	logo: string;
	casino: string;
	__typename: string;
}

export type BonusEntry = {
	casino_name: string,
    casino_uuid: string,
    bonus_subtitle: string,
    bonus_title: string,
	casino_logo: string,
	uuid: string,
	info: {
		elease_date?: string | null,
		available_for: string[], 
	}
}

type StrapiContentItem = {
	type: string;
	text: string;
	bold: boolean;
}

export type StrapiContent = {
	type: string;
	children: StrapiContentItem[];
}

export type TableContentItem = {
    heading: string;
    linkId: string
}

export interface SvgProps {
	className?: string
}

