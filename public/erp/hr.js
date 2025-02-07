//
// Note that these are all defined as panel configs, rather than instantiated
// as panel objects.  You could just as easily do this instead:
//
// var absolute = Ext.create('Ext.Panel', { ... });
//
// However, by passing configs into the main container instead of objects, we can defer
// layout AND object instantiation until absolutely needed.  Since most of these panels
// won't be shown by default until requested, this will save us some processing
// time up front when initially rendering the page.
//
// Since all of these configs are being added into a layout container, they are
// automatically assumed to be panel configs, and so the xtype of 'panel' is
// implicit.  To define a config of some other type of component to be added into
// the layout, simply provide the appropriate xtype config explicitly.
//
function getHrLayouts() {
    // This is a fake CardLayout navigation function.  A real implementation would
    // likely be more sophisticated, with logic to validate navigation flow.  It will
    // be assigned next as the handling function for the buttons in the CardLayout example.
    return {
        /*
         * ================  Start page config  =======================
         */
        // The default start page, also a simple example of a FitLayout.
        start: {
            id: 'start-panel',
            title: 'Home Page',
            layout: 'fit',
            autoScroll: true,
            bodyPadding: 15,
            contentEl: 'start-div',
        },


        department: {
            id: 'department-panel',
            title: 'Department ',
            layout: 'fit',
            autoScroll: true,
            bodyPadding: 15,
             
        },
        jabatan: {
            id: 'jabatan-panel',
            title: 'Jabatan',
            layout:'fit',
            autoScroll: true,
            bodyPadding: 15,
        },
        report: {
            id: 'report-panel',
            title: 'report',
            layout:'fit',
            autoScroll: true,
            bodyPadding: 15,
        },
        
    };
    
}
