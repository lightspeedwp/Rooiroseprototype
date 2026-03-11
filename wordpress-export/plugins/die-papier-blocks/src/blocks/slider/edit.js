/**
 * Slider Block — Editor component.
 *
 * @package DiePapierBlocks
 * @since   1.0.0
 */

import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	RangeControl,
} from '@wordpress/components';

const ALLOWED_BLOCKS = [
	'core/group',
	'core/cover',
	'core/image',
	'core/column',
	'core/quote',
	'core/media-text',
];

export default function Edit( { attributes, setAttributes } ) {
	const {
		autoplay,
		interval,
		showArrows,
		showDots,
		loop,
		slidesToShow,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'wp-block-dp-slider wp-block-dp-slider--editor',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Skyfie-instellings', 'die-papier-blocks' ) }>
					<RangeControl
						label={ __( 'Skyfies om te wys', 'die-papier-blocks' ) }
						value={ slidesToShow }
						onChange={ ( value ) => setAttributes( { slidesToShow: value } ) }
						min={ 1 }
						max={ 4 }
					/>
					<ToggleControl
						label={ __( 'Outo-speel', 'die-papier-blocks' ) }
						checked={ autoplay }
						onChange={ ( value ) => setAttributes( { autoplay: value } ) }
					/>
					{ autoplay && (
						<RangeControl
							label={ __( 'Interval (ms)', 'die-papier-blocks' ) }
							value={ interval }
							onChange={ ( value ) => setAttributes( { interval: value } ) }
							min={ 1000 }
							max={ 15000 }
							step={ 500 }
						/>
					) }
					<ToggleControl
						label={ __( 'Navigasiepyle', 'die-papier-blocks' ) }
						checked={ showArrows }
						onChange={ ( value ) => setAttributes( { showArrows: value } ) }
					/>
					<ToggleControl
						label={ __( 'Kolletjies', 'die-papier-blocks' ) }
						checked={ showDots }
						onChange={ ( value ) => setAttributes( { showDots: value } ) }
					/>
					<ToggleControl
						label={ __( 'Lus', 'die-papier-blocks' ) }
						checked={ loop }
						onChange={ ( value ) => setAttributes( { loop: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="horizontal"
					renderAppender={ InnerBlocks.ButtonBlockAppender }
				/>
			</div>
		</>
	);
}
