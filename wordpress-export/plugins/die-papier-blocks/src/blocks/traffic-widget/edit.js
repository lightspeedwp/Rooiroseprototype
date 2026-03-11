/**
 * Traffic Widget — Editor Component
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
	RangeControl,
	SelectControl,
	TextControl,
	Placeholder,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { maxItems, region, apiEndpoint } = attributes;

	const blockProps = useBlockProps( {
		className: 'dp-traffic-widget-editor',
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Verkeer-instellings', 'die-papier-blocks' ) }>
					<RangeControl
						label={ __( 'Maksimum items', 'die-papier-blocks' ) }
						value={ maxItems }
						onChange={ ( val ) => setAttributes( { maxItems: val } ) }
						min={ 1 }
						max={ 20 }
					/>
					<SelectControl
						label={ __( 'Streek', 'die-papier-blocks' ) }
						value={ region }
						options={ [
							{ label: 'Boland', value: 'boland' },
							{ label: 'Kaapse Wynlande', value: 'winelands' },
							{ label: 'Wes-Kaap', value: 'western-cape' },
						] }
						onChange={ ( val ) => setAttributes( { region: val } ) }
					/>
					<TextControl
						label={ __( 'API-eindpunt (opsioneel)', 'die-papier-blocks' ) }
						help={ __( 'Pasgemaakte verkeer-API URL.', 'die-papier-blocks' ) }
						value={ apiEndpoint }
						onChange={ ( val ) => setAttributes( { apiEndpoint: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Placeholder
				icon="car"
				label={ __( 'Verkeer Widget', 'die-papier-blocks' ) }
				instructions={ `${ __( 'Streek', 'die-papier-blocks' ) }: ${ region } · Max: ${ maxItems } ${ __( 'items', 'die-papier-blocks' ) }` }
			>
				<p style={ { fontSize: '0.75rem', color: '#636375', margin: 0 } }>
					{ __( 'Verkeerdata word lewendig gehaal en vertoon op die voorkant.', 'die-papier-blocks' ) }
				</p>
			</Placeholder>
		</div>
	);
}