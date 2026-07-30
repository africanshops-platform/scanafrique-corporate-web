export type WhitepaperBlock = { type: 'heading'; text: string } | { type: 'quote'; text: string } | { type: 'paragraph'; text: string };

/**
 * whitepaperBody is a single freeform text field (see CompanyProfile.whitepaperBody) — admin
 * staff write it as short heading lines separated by blank lines from the paragraphs under
 * them, matching the approved design's section structure. Heuristic: a short line (<90 chars)
 * ending without sentence punctuation reads as a heading; a line wrapped in quotes reads as a
 * pull-quote; everything else is a paragraph.
 */
export function splitWhitepaper(text: string): WhitepaperBlock[] {
	return text
		.split(/\n\s*\n/)
		.map((block) => block.trim())
		.filter(Boolean)
		.map((block) => {
			const isShortHeading = block.length < 90 && !/[.!]$/.test(block) && !block.includes('\n');
			if (isShortHeading) return { type: 'heading', text: block };
			if (block.startsWith('"') || block.startsWith('“')) return { type: 'quote', text: block };
			return { type: 'paragraph', text: block };
		});
}
