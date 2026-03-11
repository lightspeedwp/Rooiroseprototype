/**
 * Search Filters — Editor Component
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
	const { showDate, showCategory, showSort } = attributes;

	const blockProps = useBlockProps( {
		className: 'dp-search-filters-editor',
	} );

	const activeFilters = [
		showDate && __( 'Datum', 'die-papier-blocks' ),
		showCategory && __( 'Kategorie', 'die-papier-blocks' ),
		showSort && __( 'Sorteer', 'die-papier-blocks' ),
	].filter( Boolean );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Filter-opsies', 'die-papier-blocks' ) }>
					<ToggleControl
						label={ __( 'Wys datumfilter', 'die-papier-blocks' ) }
						checked={ showDate }
						onChange={ ( val ) => setAttributes( { showDate: val } ) }
					/>
					<ToggleControl
						label={ __( 'Wys kategoriefilter', 'die-papier-blocks' ) }
						checked={ showCategory }
						onChange={ ( val ) => setAttributes( { showCategory: val } ) }
					/>
					<ToggleControl
						label={ __( 'Wys sorteeropsie', 'die-papier-blocks' ) }
						checked={ showSort }
						onChange={ ( val ) => setAttributes( { showSort: val } ) }
					/>
				</PanelBody>
			</InspectorControls>

			<Placeholder
				icon="search"
				label={ __( 'Soekfilters', 'die-papier-blocks' ) }
				instructions={
					activeFilters.length
						? `${ __( 'Aktiewe filters', 'die-papier-blocks' ) }: ${ activeFilters.join( ', ' ) }`
						: __( 'Geen filters aktief.', 'die-papier-blocks' )
				}
			/>
		</div>
	);
}
