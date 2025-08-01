sap.ui.define(
	[ 'sap/ui/core/Control' ],
	Control => {
		'use strict';

		return Control.extend(
			'ui5.control.button',
			{
				metadata: {
					properties: {
						text: {
							type: 'string',
							defaultValue: '' 
						},
						type: {
							type: 'string',
							defaultValue: 'default' 
						},
						icon: {
							type: 'string',
							defaultValue: '' 
						},
					},
					events: { press: {}, },
				},
				renderer: (
					oRm, oControl 
				) => {
					oRm.openStart(
						'button',
						oControl 
					);
					oRm.class( 'button' );
					oRm.class( 'button-' + oControl.getType() );
					oRm.openEnd();

					if ( oControl.getIcon() ) {
						oRm.openStart( 'span' );
						oRm.class( 'button-icon' );
						oRm.openEnd();
						oRm.text( oControl.getIcon() );
						oRm.close( 'span' );
					}

					oRm.text( oControl.getText() );
					oRm.close( 'button' );
				},
				onclick: function () {
					this.firePress();
				},
			} 
		);
	} 
);
