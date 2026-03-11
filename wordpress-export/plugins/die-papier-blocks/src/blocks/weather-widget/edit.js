/**
 * Weather Widget — Editor Component
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
	SelectControl,
	ToggleControl,
	TextControl,
} from '@wordpress/components';

const LOCATIONS = [
	'Paarl',
	'Stellenbosch',
	'Franschhoek',
	'Worcester',
	'Wellington',
	'Kaapstad',
	'Hermanus',
	'George',
];

export default function Edit( { attributes, setAttributes } ) {
	const { location, showForecast, apiEndpoint } = attributes;

	const blockProps = useBlockProps( {
		className: 'dp-weather-widget-editor',
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Weer-instellings', 'die-papier-blocks' ) }>
					<SelectControl
						label={ __( 'Verstek ligging', 'die-papier-blocks' ) }
						value={ location }
						options={ LOCATIONS.map( ( loc ) => ( {
							label: loc,
							value: loc,
						} ) ) }
						onChange={ ( val ) => setAttributes( { location: val } ) }
					/>
					<ToggleControl
						label={ __( 'Wys vooruitskatting', 'die-papier-blocks' ) }
						checked={ showForecast }
						onChange={ ( val ) => setAttributes( { showForecast: val } ) }
					/>
					<TextControl
						label={ __( 'API-eindpunt (opsioneel)', 'die-papier-blocks' ) }
						help={ __( 'Pasgemaakte weer-API URL. Laat leeg vir verstek.', 'die-papier-blocks' ) }
						value={ apiEndpoint }
						onChange={ ( val ) => setAttributes( { apiEndpoint: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<div className="dp-weather-widget-editor__preview">
				<div className="dp-weather-widget-editor__icon">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
						<circle cx="12" cy="12" r="4"/>
						<path d="M12 2v2"/>
						<path d="M12 20v2"/>
						<path d="m4.93 4.93 1.41 1.41"/>
						<path d="m17.66 17.66 1.41 1.41"/>
						<path d="M2 12h2"/>
						<path d="M20 12h2"/>
						<path d="m6.34 17.66-1.41 1.41"/>
						<path d="m19.07 4.93-1.41 1.41"/>
					</svg>
				</div>
				<div>
					<p className="dp-weather-widget-editor__location">{ location }</p>
					<p className="dp-weather-widget-editor__temp">22°C</p>
					<p className="dp-weather-widget-editor__desc">{ __( 'Sonnig', 'die-papier-blocks' ) }</p>
				</div>
			</div>
		</div>
	);
}
