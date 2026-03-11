/**
 * Competition Badge — Editor Component
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
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { competitionId } = attributes;

	const blockProps = useBlockProps( {
		className: 'dp-competition-badge-editor',
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Kenteken-instellings', 'die-papier-blocks' ) }>
					<TextControl
						label={ __( 'Kompetisie ID', 'die-papier-blocks' ) }
						help={ __( 'Laat leeg om die huidige pos se konteks te gebruik.', 'die-papier-blocks' ) }
						type="number"
						value={ competitionId || '' }
						onChange={ ( val ) => setAttributes( { competitionId: val ? parseInt( val, 10 ) : 0 } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<span className="dp-competition-badge dp-competition-badge--open">
				{ __( 'Oop', 'die-papier-blocks' ) }
			</span>
		</div>
	);
}
