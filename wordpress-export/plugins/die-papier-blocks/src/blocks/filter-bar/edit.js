/**
 * Filter Bar — Editor Component
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
	ToggleControl,
	Placeholder,
} from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { showSearch } = attributes;

	const blockProps = useBlockProps( {
		className: 'dp-filter-bar-editor',
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Filter-instellings', 'die-papier-blocks' ) }>
					<ToggleControl
						label={ __( 'Wys soekveld', 'die-papier-blocks' ) }
						checked={ showSearch }
						onChange={ ( val ) => setAttributes( { showSearch: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Placeholder
				icon="filter"
				label={ __( 'Filter Balk', 'die-papier-blocks' ) }
				instructions={ __( 'Die filterbalk sal op die voorkant verskyn met kategoriefilters en opsionele soek.', 'die-papier-blocks' ) }
			>
				<div className="dp-filter-bar-editor__preview">
					{ showSearch && (
						<div className="dp-filter-bar-editor__search-preview">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
							<span>{ __( 'Soek...', 'die-papier-blocks' ) }</span>
						</div>
					) }
					<span style={ { fontSize: '0.75rem', color: '#636375' } }>
						{ __( 'Filters word outomaties uit geregistreerde taksonomieë gegenereer.', 'die-papier-blocks' ) }
					</span>
				</div>
			</Placeholder>
		</div>
	);
}