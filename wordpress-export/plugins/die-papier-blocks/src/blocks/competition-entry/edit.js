/**
 * Competition Entry — Editor Component
 *
 * @package DiePapierBlocks
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Placeholder,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export default function Edit( { attributes, setAttributes, context } ) {
	const { competitionId } = attributes;
	const postId = competitionId || context.postId;

	const blockProps = useBlockProps( {
		className: 'dp-competition-entry-editor',
	} );

	const competition = useSelect(
		( select ) => {
			if ( ! postId ) return null;
			return select( coreStore ).getEntityRecord( 'postType', 'dp_competition', postId );
		},
		[ postId ]
	);

	const title = competition?.title?.rendered || __( 'Kompetisie', 'die-papier-blocks' );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Kompetisie-instellings', 'die-papier-blocks' ) }>
					<TextControl
						label={ __( 'Kompetisie ID', 'die-papier-blocks' ) }
						help={ __( 'Laat leeg om die huidige pos se ID te gebruik.', 'die-papier-blocks' ) }
						type="number"
						value={ competitionId || '' }
						onChange={ ( val ) => setAttributes( { competitionId: val ? parseInt( val, 10 ) : 0 } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Placeholder
				icon="awards"
				label={ __( 'Kompetisie Inskrywingsvorm', 'die-papier-blocks' ) }
				instructions={ postId ? `${ title } (ID: ${ postId })` : __( 'Geen kompetisie gekies.', 'die-papier-blocks' ) }
			/>
		</div>
	);
}
