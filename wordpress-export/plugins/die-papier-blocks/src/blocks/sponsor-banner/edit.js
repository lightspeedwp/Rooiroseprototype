/**
 * Sponsor Banner — Editor Component
 *
 * Uses ComboboxControl backed by the REST API (dp_sponsor CPT) so editors
 * can search for a sponsor by name instead of entering a raw post ID.
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
	ComboboxControl,
	Spinner,
	Placeholder,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { megaphone } from '@wordpress/icons';

export default function Edit( { attributes, setAttributes } ) {
	const { sponsorId, alignment, size } = attributes;

	const blockProps = useBlockProps( {
		className: `dp-sponsor-banner dp-sponsor-banner--align-${ alignment } dp-sponsor-banner--size-${ size }`,
	} );

	// Fetch all published dp_sponsor posts.
	const { sponsors, isResolving } = useSelect( ( select ) => {
		const query = {
			per_page: 100,
			status: 'publish',
			orderby: 'title',
			order: 'asc',
		};
		const records = select( coreStore ).getEntityRecords( 'postType', 'dp_sponsor', query );
		const resolving = select( coreStore ).isResolving( 'getEntityRecords', [
			'postType',
			'dp_sponsor',
			query,
		] );
		return {
			sponsors: records ?? [],
			isResolving: resolving,
		};
	}, [] );

	// Fetch currently selected sponsor for preview.
	const selectedSponsor = useSelect(
		( select ) => {
			if ( ! sponsorId ) return null;
			return select( coreStore ).getEntityRecord( 'postType', 'dp_sponsor', sponsorId );
		},
		[ sponsorId ]
	);

	const sponsorOptions = sponsors.map( ( s ) => ( {
		value: String( s.id ),
		label: s.title?.rendered ?? `Borg #${ s.id }`,
	} ) );

	const sizeLabel = { small: 'Klein', medium: 'Medium', large: 'Groot' }[ size ] ?? size;

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Borg Instellings', 'die-papier-blocks' ) } initialOpen={ true }>
					{ isResolving ? (
						<Spinner />
					) : (
						<ComboboxControl
							label={ __( 'Soek borg', 'die-papier-blocks' ) }
							help={ __( 'Begin tik om \'n borg te soek.', 'die-papier-blocks' ) }
							value={ sponsorId ? String( sponsorId ) : '' }
							options={ sponsorOptions }
							onChange={ ( value ) =>
								setAttributes( { sponsorId: value ? parseInt( value, 10 ) : 0 } )
							}
							allowReset
						/>
					) }

					<SelectControl
						label={ __( 'Belyning', 'die-papier-blocks' ) }
						value={ alignment }
						options={ [
							{ label: 'Links', value: 'left' },
							{ label: 'Middel', value: 'center' },
							{ label: 'Regs', value: 'right' },
						] }
						onChange={ ( value ) => setAttributes( { alignment: value } ) }
					/>

					<SelectControl
						label={ __( 'Logo grootte', 'die-papier-blocks' ) }
						value={ size }
						options={ [
							{ label: 'Klein (32px)', value: 'small' },
							{ label: 'Medium (48px)', value: 'medium' },
							{ label: 'Groot (80px)', value: 'large' },
						] }
						onChange={ ( value ) => setAttributes( { size: value } ) }
					/>
				</PanelBody>
			</InspectorControls>

			{ sponsorId ? (
				<div className="dp-sponsor-banner__preview">
					<p className="dp-sponsor-label">In vennootskap met</p>
					<p className="dp-sponsor-banner__preview-name">
						{ selectedSponsor
							? selectedSponsor.title?.rendered
							: `Borg #${ sponsorId }` }
						{ ' ' }
						<span className="dp-sponsor-banner__preview-size">({ sizeLabel })</span>
					</p>
				</div>
			) : (
				<Placeholder
					icon={ megaphone }
					label={ __( 'Borg Banner', 'die-papier-blocks' ) }
					instructions={ __( 'Soek en kies \'n borg in die sydpaneel.', 'die-papier-blocks' ) }
					style={ { textAlign: alignment } }
				/>
			) }
		</div>
	);
}
