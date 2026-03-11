/**
 * Tab Bar — Editor Component
 *
 * Renders editable tabs in the editor with InnerBlocks for each panel.
 *
 * @package DiePapierBlocks
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	Button,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
	const { tabs, defaultTab } = attributes;
	const [ activeTab, setActiveTab ] = useState( defaultTab || tabs[ 0 ]?.value );

	const blockProps = useBlockProps( {
		className: 'dp-tab-bar-editor',
	} );

	const updateTab = ( index, field, value ) => {
		const newTabs = [ ...tabs ];
		newTabs[ index ] = { ...newTabs[ index ], [ field ]: value };
		setAttributes( { tabs: newTabs } );
	};

	const addTab = () => {
		const newIndex = tabs.length + 1;
		setAttributes( {
			tabs: [
				...tabs,
				{ label: `Oortjie ${ newIndex }`, value: `tab-${ newIndex }` },
			],
		} );
	};

	const removeTab = ( index ) => {
		if ( tabs.length <= 1 ) return;
		const newTabs = tabs.filter( ( _, i ) => i !== index );
		setAttributes( { tabs: newTabs } );
		if ( activeTab === tabs[ index ].value ) {
			setActiveTab( newTabs[ 0 ].value );
		}
	};

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody title={ __( 'Oortjie-instellings', 'die-papier-blocks' ) }>
					{ tabs.map( ( tab, i ) => (
						<div key={ tab.value } style={ { marginBottom: '1rem', padding: '0.5rem', background: '#f9f9f9', borderRadius: '4px' } }>
							<TextControl
								label={ `${ __( 'Etiket', 'die-papier-blocks' ) } ${ i + 1 }` }
								value={ tab.label }
								onChange={ ( val ) => updateTab( i, 'label', val ) }
							/>
							<TextControl
								label={ __( 'Waarde (slug)', 'die-papier-blocks' ) }
								value={ tab.value }
								onChange={ ( val ) => updateTab( i, 'value', val ) }
							/>
							{ tabs.length > 1 && (
								<Button
									isDestructive
									isSmall
									onClick={ () => removeTab( i ) }
								>
									{ __( 'Verwyder', 'die-papier-blocks' ) }
								</Button>
							) }
						</div>
					) ) }
					<Button isPrimary isSmall onClick={ addTab }>
						{ __( 'Voeg oortjie by', 'die-papier-blocks' ) }
					</Button>
				</PanelBody>
			</InspectorControls>

			<div className="dp-tab-bar-editor__tabs" role="tablist">
				{ tabs.map( ( tab ) => (
					<button
						key={ tab.value }
						className={ `dp-tab-bar-editor__tab${ activeTab === tab.value ? ' dp-tab-bar-editor__tab--active' : '' }` }
						onClick={ () => setActiveTab( tab.value ) }
						role="tab"
						aria-selected={ activeTab === tab.value }
					>
						{ tab.label }
					</button>
				) ) }
			</div>

			<div className="dp-tab-bar-editor__content">
				<InnerBlocks />
			</div>
		</div>
	);
}
