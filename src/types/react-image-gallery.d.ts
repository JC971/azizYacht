import 'react-image-gallery';
declare module "react-image-gallery" {
	export interface ReactImageGalleryItem {
		loading?: "lazy" | "eager";
		originalAlt?: string;
		thumbnailAlt?: string;
	}

	export interface ReactImageGalleryProps {
		items: ReactImageGalleryItem[];
		additionalClass?: string;
		showPlayButton?: boolean;
		showFullscreenButton?: boolean;
		renderItem?: (item: ReactImageGalleryItem) => React.ReactNode;
	}

	declare const ReactImageGallery: React.ComponentType<ReactImageGalleryProps>;
	export default ReactImageGallery;
}
