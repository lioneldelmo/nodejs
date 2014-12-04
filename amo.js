//
// Lionel Delmo
// 

AMO = {};

AMO.Paths = function () {
    return {
        RelativeConfigFile: '../config/config.json',
        RelativeCGIScriptsPath: 'cgi/',
        RelativeCGISchedulerUrlPath: '../scheduler/scheduler.cgi',
        RelativeCGIActivityLogUrlPath: '../ground_ops/cgi/user_activity.cgi',
        RelativeSSCHostFile: '../data/ssc/host.json',
        RelativeStateFile: '',
        RelativeDataAmissResultPath: '',
        RelativeDataHyDEResultPath: '',
        RelativeDataTocaResultPath: '',
        RelativeStaticFaultIndicatorsPath: '',
        RelativeStaticHydeMessagesPath: '',
        RelativeStaticPlotDescriptionsPath: '',
        RelativeStaticProceduresPath: '',
        RelativeStaticReferencesPath: '',
        RelativeStaticSoftwareMessagesPath: '',
        RelativeStaticTocaComponentsPath: '',
        RelativeStaticVideosPath: '',
        RelativeDataUIPath: ''
    }
}();

AMO.Constants = function () {
    return {
        TaskStatus: {
            SCHEDULED: "SCHEDULED",
            RECOMMENDED: "RECOMMENDED",
            REQUESTED: "REQUESTED",
            ABORTED: "ABORTED",
            COMPLETED: "COMPLETED",
            DEFERRED: "DEFERRED",

            SCHEDULED_LABEL: "Scheduled",
            RECOMMENDED_LABEL: "Recommended",
            REQUESTED_LABEL: "Requested",
            ABORTED_LABEL: "Aborted",
            COMPLETED_LABEL: "Completed",
            DEFERRED_LABEL: "Deferred"
        },
        SSCStatus: {
            NOMINAL: "Nominal",
            OFFNOMINAL: "Off-Nominal",
            OFFLINE: "Offline"
        },
        Threshold: {
            ReplicateValue: 3000,
            TocTicValue: 3000,
            TocRsdValue: 25,
            TocRsdThreshold: 1000
        },
        SSCAlertThreshold: {
            NoDataElapsedTimeMinutes: 60,
            UptimeElapsedTimeMinutes: 11520, // 8 days, 0 hours, 0 minutes
            LatencyMilliseconds: 500,
            RAMUsageGig: 3.5,
            RAMUsagePercent: 87.5,
            CPUUsagePercent: 100,
            CPUUsageElapsedTimeMinutes: 20,
            HDDFreePercent: 10,
            HDDUsagePercent: 90,
            CPUTempCelsius: 80,
            CPUTempElapsedTimeMinutes: 120,
            GPUTempCelsius: 80,
            GPUTempElapsedTimeMinutes: 120,
            HDDTempCelsius: 60,
            HDDTempElapsedTimeMinutes: 120
        },
        SSCParameterKey: {
            ARP: 'ARP',
            IPAddress: 'IP Address',
            Latency: 'Ping',
            LatencyLabel: 'Network Latency',
            Uptime: 'Uptime',
            CPUUsage: 'CPU Usage',
            DiskSpaceUsage: 'Disk Space Usage',
            DiskSpaceUsageLabel: 'Hard Drive (D:) Usage',
            MemoryUsage: 'Memory Usage',
            MemoryUsageLabel: 'Memory (RAM) Usage',
            CPUTemperature: { Text: 'CPU Temperature', CPU: 'CPU', Temperature: 'Temperature' },
            HDDTemperature: 'Hard Drive Temperature'
        }
    };
}();

AMO.Enum = function () {
    return {
        GraphType: {
            // TOCA related plots
            TOCResultsTrendGraph: "TOCRESULTSTRENDGRAPH",
            LiquidFlowAverageInReactTOCTrendGraph: "LIQUIDFLOWAVERAGEINREACTTOCTRENDGRAPH",
            OxidizerVoltageTrendGraph: "OXIDIZERVOLTAGETRENDGRAPH",

            LiquidFlowRateDuringRunGraph: "LIQUIDFLOWRATEDURINGRUNGRAPH",
            OxidizerVoltagePerformanceDuringRunGraph: "OXIDIZERVOLTAGEPERFORMANCEDURINGRUNGRAPH",
            ChillerTemperaturesT1T2T3DuringRunGraph: "CHILLERTEMPERATUREST1T2T3DURINGRUNGRAPH",
            H2CatalystTemperaturesT5T6T7DuringRunGraph: "H2CATALYSTTEMPERATUREST5T6T7DURINGRUNGRAPH",
            GasDryerTemperaturesT8T9T10DuringRunGraph: "GASDRYERTEMPERATUREST8T9T10DURINGRUNGRAPH",
            VCAP1PressureReadingsDuringRunGraph: "VCAP1PRESSUREREADINGSDURINGRUNGRAPH",
            OxidizerP2PressureReadingDuringRunGraph: "OXIDIZERP2PRESSUREREADINGDURINGRUNGRAPH",
            PressureReadingsDuringRunGraph: "PRESSUREREADINGSDURINGRUNGRAPH",
            TOCALiquidLoopGraph: "TOCALIQUIDLOOPGRAPH",

            TOCResultsTrendGraphLabel: "TOC Results Trend Plot",
            LiquidFlowAverageInReactTOCTrendGraphLabel: "Liquid Flow Average in React TOC Trend Plot",
            OxidizerVoltageTrendGraphLabel: "Oxidizer Voltage Trend Plot",

            LiquidFlowRateDuringRunGraphLabel: "Liquid Flow Rate During Run",
            OxidizerVoltagePerformanceDuringRunGraphLabel: "Oxidizer Voltage Performance During Run",
            ChillerTemperaturesT1T2T3DuringRunGraphLabel: "Chiller Temperatures (T1,T2,T3) During Run",
            H2CatalystTemperaturesT5T6T7DuringRunGraphLabel: "H2 Catalyst Temperatures (T5,T6,T7) During Run",
            GasDryerTemperaturesT8T9T10DuringRunGraphLabel: "Gas Dryer Temperatures (T8,T9,T10) During Run",
            VCAP1PressureReadingsDuringRunGraphLabel: "VCA (P1) Pressure Readings During Run",
            OxidizerP2PressureReadingDuringRunGraphLabel: "Oxidizer (P2) Pressure Readings During Run",
            PressureReadingsDuringRunGraphLabel: "Gas Pressure Readings During Run",
            TOCALiquidLoopGraphLabel: "TOCA Liquid Loop During Run",

            // SSC related plots...
            UptimeGraph: "SSCUPTIMEGRAPH",
            LatencyGraph: "SSCLATENCYGRAPH",
            CPUUsageGraph: "SSCCPUUSAGEGRAPH",
            RAMUsageGraph: "SSCRAMUSAGEGRAPH",
            HDDUsageGraph: "SSCHDDUSAGEGRAPH",
            CPUTemperatureGraph: "SSCCPUTEMPERATUREGRAPH",
            HDDTemperatureGraph: "SSCHDDTEMPERATUREGRAPH",

            UsagesGraph: "SSCUSAGESGRAPH",
            TemperaturesGraph: "SSCTEMPERATURESGRAPH",

            UptimeGraphLabel: "Uptime",
            LatencyGraphLabel: "Network Latency",
            CPUUsageGraphLabel: "CPU Usage",
            RAMUsageGraphLabel: "Memory (RAM) Usage",
            HDDUsageGraphLabel: "Hard Drive (D:) Usage",
            CPUTemperatureGraphLabel: "CPU Temperature",
            HDDTemperatureGraphLabel: "Hard Drive Temperature",

            UsagesGraphLabel: "Usages (CPU, RAM & HDD)",
            TemperaturesGraphLabel: "Temperatures (CPU & HDD)"
        }
    };
}();

AMO.Model = {};

AMO.UI = function () {
    // special characters... ☐☐ ☑ , ✓, ✔, ☑,  ☑ , ☐, ☒ ▼ ▲
    // A shared object containing all the values you want shared between your tooltips
    var sharedQTipConfig = {
        position: {
            my: 'bottom right',
            at: 'top left'
        },
        show: 'click',
        hide: 'click',
        style: {
            tip: true
        }
    };

    var sharedDialogConfig = {
        title: 'Title Here',
        subtitle: 'Subtitle here..',
        ownhtml: "<p>hello world...this is where my content</p>",
        css: { width: '400px', height: '250px', top: '25%' },
        classInfo: { 'display': 'none' },
        displayButtons: true,
        displayButtonLinks: false
    };

    var _qTipAPI = null;
    var _currentTask = null;

    var _crewNoteContainerIds = [];

    // --- jQuery cache elements -------
    var $divPleaseWait = $('#divPleaseWait');
    var $divFindPrevNextPanel = $('#divFindPrevNextPanel');
    var $divHELPContainerContent = $('#divHELP .help-container .content');
    var $videoReferenceControl = $('#videoReferenceControl');
    var $videoSscReferenceControl = $('#videoSscReferenceControl');

    var $divFeedback = $('#divFeedback');
    var $SearchBoxText = $('#SearchBoxText');

    var $topHeader = null;
    var $leftNav = null;
    var $selectedTextPrevious = null;
    // --------------------------------------------------------------------------

    var preInit = function () {
        var me = this;

        // store the initial application route if it's available...
        me.InitialAppRoute = GetLocationHash();
        if (me.InitialAppRoute === null) me.InitialAppRoute = '';

        if (AMO.UI.IsIpad == true) {
            if (me.InitialAppRoute.length == 0) {
                me.InitialAppRoute = AMO.Utils.GetCookie("InitialAppRoute");
                if (me.InitialAppRoute == null) me.InitialAppRoute = '';
                if (me.InitialAppRoute.length > 0) {
                    AMO.UI.SetAppHashRoute(me.InitialAppRoute, true);
                }
            }
        }

        function initiate() {

            AMO.Model = new AMO.ViewModel();

            // Control flow....
            me.FlowControl([
                function (cb) { AMO.TOCA.GetProcedures(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetComponents(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetHardwareMessages(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetSoftwareMessages(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetPlotDescriptions(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetStates(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetVideos(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetGlossary(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetStatesColorCodes(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetHyDEMessages(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetTOCAResults(function () { cb(); }); },
                function (cb) { AMO.TOCA.GetTasks(false, function () { cb(); }); },
                function (cb) { AMO.TOCA.GetTasksHistory(function () { cb(); }); },
                function (cb) { AMO.SSC.GetSSCProcedures(function () { cb(); }); },
                function (cb) { AMO.SSC.GetSSCAlertMessages(function () { cb(); }); },
                function (cb) { AMO.SSC.GetSSCPlotDescriptions(function () { cb(); }); },
                function (cb) { AMO.SSC.GetSSCDefinitions(function () { cb(); }); },
                function (cb) { AMO.SSC.GetSSCLocations(function () { cb(); }); },
                function (cb) { AMO.SSC.GetHostData(function () { cb(); }, true); },
                function (cb) { AMO.SSC.GetVideos(function () { cb(); }); },
                function (cb) { AMO.UI.GetAMOVideos(function () { cb(); }); }
            ], function () {

                // ---------------------------------------------------------------------------------------------------------
                // pre processing UI components which are dependent on the data prior to KO bindings...
                me.LoadFaultIndicator('1111', false);

                // custom bindings...
                ko.bindingHandlers.taskStatusBinding = {
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called when the binding is first applied to an element
                        // Set up any initial state, event handlers, etc. here
                        $(element).css('display', 'block');
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called once when the binding is first applied to an element,
                        // and again whenever the associated observable changes value.
                        // Update the DOM element based on the supplied values here.
                        $(element).hide();
                        ko.bindingHandlers.text.update(element, valueAccessor);
                        $(element).fadeIn();

                        // the following only applies to 'divTaskGrid'
                        if ($(element).closest('#divTaskGrid').length > 0) {
                            // var parentTD = $(element).parent();
                            var status = valueAccessor().toUpperCase();
                            if (status === 'COMPLETED' || status === 'ABORTED' || status === 'DEFERRED') {
                                var parentRow = $(element).parent().parent();
                                // parentRow.css('background-color', 'rgba(102,102,102,1)');
                                // parentRow.animate({ "background-color": "rgba(102,102,102,1)" }, 1000);
                                parentRow.animate({ "background-color": "#cccccc" }, 1000);
                            }
                        }
                    }
                };

                ko.bindingHandlers.sscStatusBinding = {
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called when the binding is first applied to an element
                        // Set up any initial state, event handlers, etc. here
                        $(element).css('display', 'block');
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called once when the binding is first applied to an element,
                        // and again whenever the associated observable changes value.
                        // Update the DOM element based on the supplied values here.
                        // $(element).hide();
                        // ko.bindingHandlers.text.update(element, valueAccessor);
                        // $(element).fadeIn();
                    }
                };

                ko.bindingHandlers.sscTempChartBinding = {
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                        var param = valueAccessor();

                        // This will be called when the binding is first applied to an element
                        // Set up any initial state, event handlers, etc. here
                        $(element).css('display', 'block');

                        var backgroundColorThreshold = null;
                        var threshold = (param.type === 'HDD') ? 60 : 80;
                        if (param.value >= threshold) {
                            backgroundColorThreshold = '#fb00ff';
                        }             

                        $(element).highcharts({
                            chart: {
                                type: 'gauge',
                                plotBackgroundColor: null,
                                plotBackgroundImage: null,
                                plotBorderWidth: 0,
                                plotShadow: false
                            },
                            title: {
                                text: null
                            },
                            subtitle: {
                                text: null
                            },
                            exporting: {
                                enabled: false
                            },
                            credits: {
                                enabled: false
                            },
                            tooltip: {
                                enabled: false
                            },
                            plotOptions: {
                                gauge: {
                                    dataLabels: {
                                        enabled:false,
                                        y: 7,
                                        color: '#000',
                                        backgroundColor: backgroundColorThreshold
                                    }
                                }
                            },
                            pane: {
                                startAngle: -150,
                                endAngle: 150,
                                background: [{
                                    backgroundColor: {
                                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                        stops: [
                                            [0, '#FFF'],
                                            [1, '#333']
                                        ]
                                    },
                                    borderWidth: 0,
                                    outerRadius: '109%'
                                }, {
                                    backgroundColor: {
                                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                                        stops: [
                                            [0, '#333'],
                                            [1, '#FFF']
                                        ]
                                    },
                                    borderWidth: 1,
                                    outerRadius: '107%'
                                }, {
                                    // default background
                                }, {
                                    backgroundColor: '#DDD',
                                    borderWidth: 0,
                                    outerRadius: '105%',
                                    innerRadius: '103%'
                                }]
                            },

                            // the value axis
                            yAxis: {
                                min: 0,
                                max: 110,

                                minorTickInterval: 'auto',
                                minorTickWidth: 1,
                                minorTickLength: 10,
                                minorTickPosition: 'inside',
                                minorTickColor: '#666',

                                tickPixelInterval: 30,
                                tickWidth: 2,
                                tickPosition: 'inside',
                                tickLength: 10,
                                tickColor: '#666',
                                labels: {
                                    step: 2,
                                    rotation: 'auto'
                                },
                                title: {
                                    text: '°C',
                                    align: 'low',
                                    // offset: 200,
                                    y: 45,
                                    x: -6
                                },
                                plotBands: [{
                                    from: 0,
                                    to: (param.type === 'HDD') ? 60 : 80,
                                    color: '#55BF3B' // green
                                }, {
                                    from: (param.type === 'HDD') ? 60 : 80,
                                    to: 100,
                                    color: '#ffd437' //'#DDDF0D' // yellow
                                }, {
                                    from: 100,
                                    to: 110,
                                    color: '#ffd437' //#DF5353' // red -- change to yellow per KARA/JSC
                                }]
                            },

                            series: [{
                                name: 'Temperature',
                                data: [param.value],
                                tooltip: {
                                    valueSuffix: ' °C'
                                }
                            }]

                        });
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called once when the binding is first applied to an element,
                        // and again whenever the associated observable changes value.
                        // Update the DOM element based on the supplied values here.
                        //$(element).hide();
                        // ko.bindingHandlers.text.update(element, valueAccessor);
                        //$(element).fadeIn();

                        var thisElement = $(element);
                        var labelValueContainer = thisElement.next('.label-value-container');
                        var param = valueAccessor();
                        var tempChart = $(element).highcharts();
                        var point = tempChart.series[0].points[0];

                        point.update(param.value);

                        // since i disabled this label ... no need to update
                        // tempChart.series[0].update({ dataLabels: { backgroundColor: (param.isNominal == true ? '#80cd33' : '#ffd437' ) } });

                        // update the label...
                        var htmlDetails = [];
                        htmlDetails.push('Temperature:&nbsp;<b>' + param.value + '°C</b>');
                        if (param.type == 'CPU') {
                            htmlDetails.push('<br />Threshold ');
                            htmlDetails.push('<b>&gt;' + AMO.Constants.SSCAlertThreshold.CPUTempCelsius + '°C</b>');
                        } else if (param.type == 'HDD') {
                            htmlDetails.push('<br />Threshold ');
                            htmlDetails.push('<b>&gt;' + AMO.Constants.SSCAlertThreshold.HDDTempCelsius + '°C</b>');
                        }
                        labelValueContainer.find('div:first').html(htmlDetails.join(''));
                    }
                };

                ko.bindingHandlers.sscUsageChartBinding = {
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called when the binding is first applied to an element
                        // Set up any initial state, event handlers, etc. here
                        $(element).css('display', 'block');

                        var param = valueAccessor();

                        $(element).highcharts({
                            chart: {
                                type: 'pie'
                            },
                            title: {
                                text: null
                            },
                            subtitle: {
                                text: null
                            },
                            exporting: {
                                enabled: false
                            },
                            credits: {
                                enabled: false
                            },
                            tooltip: {
                                enabled: false
                            },
                            plotOptions: {
                                pie: {
                                    dataLabels: {
                                        distance: -30,
                                        color: '#ffffff',
                                        format: '<b>{point.name}</b><br/>{point.percentage:.0f} %'
                                    },
                                    size: 115
                                }
                            },

                            series: [{
                                name: '',
                                data: [
                                    ['Free', param['Free'].value],
                                    ['Usage', param['Used'].value]
                                ]
                            }]
                        });
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called once when the binding is first applied to an element,
                        // and again whenever the associated observable changes value.
                        // Update the DOM element based on the supplied values here.
                        //$(element).hide();
                        // ko.bindingHandlers.text.update(element, valueAccessor);
                        //$(element).fadeIn();

                        var thisElement = $(element);
                        var labelValueContainer = thisElement.next('.label-value-container');

                        // labelValueContainer.find('div:first').html('test');

                        var param = valueAccessor();
                        var usageChart = $(element).highcharts();
                        var freeValue = param['Free'].value;
                        var usageValue = param['Used'].value;
                        var isNominalFree = param['Free'].isNominal;
                        var isNominalUsage = param['Used'].isNominal;
                        var isNominalBytes = param['Bytes'].isNominal;

                        var data = [['Free', freeValue], ['Usage', usageValue]]

                        usageChart.series[0].setData(data);

                        // update the label..
                        // labelValueContainer.find('div:first').html('Usage:&nbsp;<b>' + usageValue + '%</b>&nbsp;&nbsp;Free:&nbsp;<b>' + freeValue + '%</b><br />Threshold <b>=100%</b>');
                        var htmlDetails = [];
                        htmlDetails.push('Usage:&nbsp;<b>' + usageValue + '%</b>&nbsp;&nbsp;Free:&nbsp;<b>' + freeValue + '%</b>');
                        
                        // <br />Threshold <b>=100%</b>'

                        var threshold = 0;
                        var labelColor = '#ffffff';

                        var freeData = {
                            value: param['Free'].value,
                            backColor: '#80CD33'
                        };
                        var usedData = {
                            value: param['Used'].value,
                            backColor: '#3D6118'
                        };

                        freeData.value = param['Free'].value;

                        switch (param['Free'].type) {
                            case 'Disk Space':
                                //if (isNominalFree == false) 
                                if (isNominalUsage == false) {
                                    freeData.backColor = "#A88200";
                                    usedData.backColor = "#FFD437"
                                    labelColor = '#000000'
                                }
                                htmlDetails.push('<br />');
                                htmlDetails.push('Threshold <b>');
                                //htmlDetails.push('≤' + AMO.Constants.SSCAlertThreshold.HDDFreePercent + '%');
                                htmlDetails.push('>' + AMO.Constants.SSCAlertThreshold.HDDUsagePercent + '%');
                                htmlDetails.push('</b>');
                                break;
                            case 'CPU':
                                if (isNominalUsage == false) {
                                    freeData.backColor = "#A88200";
                                    usedData.backColor = "#FFD437"
                                    labelColor = '#000000';
                                }
                                htmlDetails.push('<br />');
                                htmlDetails.push('Threshold <b>');
                                htmlDetails.push('=' + AMO.Constants.SSCAlertThreshold.CPUUsagePercent + '%');
                                htmlDetails.push('</b>');

                                break;
                            case 'Memory':
                                if (isNominalUsage == false) { //(isNominalBytes == false) {
                                    freeData.backColor = "#A88200";
                                    usedData.backColor = "#FFD437"
                                    labelColor = '#000000';
                                }
                                htmlDetails.push('<br />');
                                htmlDetails.push('Threshold <b>');
                                htmlDetails.push('>' + AMO.Constants.SSCAlertThreshold.RAMUsagePercent + '%');
                                htmlDetails.push('</b>');
                                break;
                        }

                        // update the label..
                        labelValueContainer.find('div:first').html(htmlDetails.join(''));

                        usageChart.options.colors[0] = freeData.backColor;
                        usageChart.options.colors[1] = usedData.backColor;

                        usageChart.series[0].update({ dataLabels: { color: labelColor } });

                    }
                };

                ko.bindingHandlers.crewNoteHTMLBinding = {
                    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called when the binding is first applied to an element
                        // Set up any initial state, event handlers, etc. here
                        // $(element).css('display', 'block');
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                        // This will be called once when the binding is first applied to an element,
                        // and again whenever the associated observable changes value.
                        // Update the DOM element based on the supplied values here.

                        //var tableCrewNote = $(element);
                        //var crewNoteContent = tableCrewNote.find('.crew-note-content');
                        //var crewNoteContainer = crewNoteContent.parent();
                        //crewNoteContent.html(valueAccessor());
                        //var flag = crewNoteContainer.next('.crew-note-more-flag');

                        //if (crewNoteContainer.height() + 2 >= crewNoteContent.height()) {
                        //    flag.hide();
                        //} else {
                        //    flag.show();
                        //}

                        var crewNoteContent = $(element);
                        //crewNoteContent.html(valueAccessor());
                        ko.bindingHandlers.html.update(element, valueAccessor);

                        var crewNoteContainer = crewNoteContent.parent();
                        var flag = crewNoteContainer.next('.crew-note-more-flag');
                        if (crewNoteContainer.height() + 2 >= crewNoteContent.height()) {
                            flag.hide();
                        } else {
                            flag.show();
                        }

                        var crewNoteContainerId = crewNoteContainer.attr('data-crew-note-container-id');
                        var h = _crewNoteContainerIds[crewNoteContainerId];
                        if (typeof h != 'undefined' && h != null) {
                            crewNoteContainer.css('height', 'auto');
                            flag.find('span').text('[less]');
                            flag.show();
                        }
                    }
                };

                // now it's time to apply knockout bindings with the Model
                ko.applyBindings(AMO.Model);

                // ---------------------------
                // post processing UI
                // start monitoring/listening...

                // polling for STATE.JSON
                AMO.MonitorStatus();

                // polling for SCHEDULEs - SCHEDULER.CGI - 'action=schedule'
                AMO.MonitorSchedule();

                // polling for SSC data
                AMO.MonitorSSC();

                window.setTimeout(function () {
                    // update the TocaOperationalOverview tab
                    $('<div />').load(AMO.Paths.RelativeStaticTocaComponentsPath + 'TOCA-operational-overview.htm', function () {
                        var t = $(this);
                        t.find('.title-header').remove();
                        $('#divTocaOperationalOverview').html(t.html());

                        AMO.UI.EnableImageZoom($('#divTocaOperationalOverview .image-detail-container img'));
                    });
                }, 2000);

                window.setTimeout(function () {
                    $('[data-auto-load]').each(function () {
                        var t = $(this);
                        var url = t.attr('url');
                        if (url.length > 0) {
                            t.load(url, function () {
                            });
                        }
                    });
                }, 1000);
            });
        }

        // Read first the configuration file....
        AMO.Common.GetConfiguration(function () {
            initiate();
        }, function () {
            AMO.UI.AlertBox('Oops! Unable to read AMO configuration file.', '', function () {
                // reloads the page...
                AMO.UI.RefreshPage();
            });
        });

    };

    var init = function () {
        var me = this;
        var SearchBoxTextTimerId = null;

        // initialize jQuery objects for all and future/dynamically created elements/objects
        $(document).on('click', '#divSchematicListContent a', function (event) {
            var t = $(this);

            AMO.UI.PreventDefault(event);
            AMO.UI.StopPropagation(event);

            var effect = t.attr('data-effect');
            if (AMO.Utils.HasNoValue(effect)) {
                effect = '';
            }

            t.removeAttr('data-effect');

            var backDetailButton = $('#divTocaComponentDetailBackButton');
            if (backDetailButton.is(':visible')) {
                backDetailButton.trigger('touchclick'); //.click();
            }

            var dataSchematicId = parseInt(t.attr('data-schematic-id'), 10);
            var dataSchematicDetailUrl = t.attr('data-schematic-detail-url');

            $('#divSchematicNextPrev').show();

            $('#divSchematicComboBox span.text').text(t.text());
            $('#divSchematicComboBox span.arrow-text').text('▼');
            $('#divSchematicListContent').hide();
            AMO.UI.CurrentClickedElement = null;

            AMO.UI.ClearImageZoom();

            if (dataSchematicId > -1) {

                $('#divTocaSchematicDetail').hide();
                $('#divTocaSchematicDetail').empty();

                // convert to NO CACHE URL
                // dataSchematicDetailUrl = AMO.Utils.GetNoCacheUrl(dataSchematicDetailUrl);
                $('#divTocaSchematicDetail').load(dataSchematicDetailUrl, function () {
                    $('#divTocaSchematicDetail').show();
                    window.setTimeout(function () {
                        AMO.UI.EnableImageZoom($('#divTocaSchematicDetail .image-detail-container img'));
                    }, 1000);
                    
                    AMO.UI.SetAppHashRoute('0|3|5|' + dataSchematicId, true);
                });
            } else {
                $('#divTocaSchematicDetail').hide();
                $('#imgTocaSchematicActive').show('fade', {}, 500);
            }

            var prevSchematicId = dataSchematicId - 1;
            var nextSchematicId = dataSchematicId + 1;

            var prevButton = $('#divSchematicNextPrev .schematic-prev-button:first');
            var nextButton = $('#divSchematicNextPrev .schematic-next-button:first');

            if (prevSchematicId < 0) {
                prevButton.addClass('button-disable');
                prevSchematicId = 0;
            } else {
                prevButton.removeClass('button-disable');
            }
            if (nextSchematicId > (AMO.Model.tocaSchematicList.length - 1)) {
                nextButton.addClass('button-disable');
                nextSchematicId = (AMO.Model.tocaSchematicList.length - 1);
            } else {
                nextButton.removeClass('button-disable');
            }

            prevButton.attr('data-schematic-id', prevSchematicId);
            nextButton.attr('data-schematic-id', nextSchematicId);

            AMO.UI.ScrollTop(0);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });

        $(document).on('touchclick', '#divTocaTabTasks .button[data-task-key]', function () {

            var t = $(this);
            var dataTaskUUID = t.attr('data-uuid');
            var dataTaskKey = t.attr('data-task-key');
            var dataTaskDue = t.attr('data-task-due');
            var dataTaskId = t.attr('data-task-id');
            var dataPriority = t.attr('data-priority');
            var dataStatus = t.attr('data-status');
            var dataOldStatus = t.attr('data-old-status');
            var dialogBoxHeight = '185px';
            var oldScrollTop = $(window).scrollTop();
            var weekSchedule = null;
            if (AMO.Model.tocaCurrentWeekStartDate() == dataTaskKey) weekSchedule = AMO.Model.tocaCurrentWeekSchedule();
            if (AMO.Model.tocaNextWeekStartDate() == dataTaskKey) weekSchedule = AMO.Model.tocaNextWeekSchedule();
            if (AMO.Model.tocaFutureWeekStartDate() == dataTaskKey) weekSchedule = AMO.Model.tocaFutureWeekSchedule();

            if (weekSchedule == null) return;

            var selectedTask = null;
            // change the status....
            for (var idx = 0; idx < weekSchedule.length; idx++) {
                // { "due_date": "2013_062", "procedure": "100", "status": AMO.Constants.TaskStatus.SCHEDULED, "task_name": "PWD Sampling Hot" },
                var task = weekSchedule[idx];
                if (task.due_date == dataTaskDue && task.procedure == dataTaskId) {
                    selectedTask = task;
                    break;
                }
            }

            if (selectedTask == null) return;

            if (AMO.UI.IsIpad == true) {
                AMO.UI.BlockPage();
            }

            var htmlString = [];
            var actionButtons = {};

            
            if (t.text() == 'Send Schedule Request') {
                dialogBoxHeight = '230px';
                htmlString.push('<div class="button dark-gray dialog-close-button dialog-close-button-confirm-box" data-original-scroll-top=' + oldScrollTop  + '>X</div>');
                htmlString.push('<div class="send-schedule-request-crew-note">');
                htmlString.push('<div class="label">Crew Note</div>');
                htmlString.push('<div><textarea maxlength=1000></textarea></div>');
                htmlString.push('</div>');
                htmlString.push('<h2 style="padding-top:10px;">Are you sure?</h2>');

                function updateTaskStatus() {

                    selectedTask.crew_note($('.send-schedule-request-crew-note textarea').val());

                    // call SCHEDULER'S API to update the status....
                    AMO.TOCA.UpdateTaskStatus(selectedTask, dataStatus, function (data) {
                        if (typeof data.ERROR != 'undefined') {
                            AMO.Utils.WriteConsole('Error updating status ....');
                        }
                        //if (data != null && data.RESULT == 'OK') {
                        //    // change the status....
                        //    selectedTask.status(dataStatus);
                        //    AMO.Utils.WriteConsole('Status updated....');
                        //} else {
                        //    AMO.Utils.WriteConsole('Error updating status ....');
                        //}
                    });
                }

                actionButtons = {
                    'Yes': function () {
                        updateTaskStatus();
                        AMO.MonitorScheduleHalt = false;
                        // Log user activity...
                        AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true), "Crew Action:YES");
                        $.unblockUI();

                        if (AMO.UI.IsIpad == true) {
                            AMO.UI.UnBlockPage();
                            AMO.UI.ScrollTop(oldScrollTop, 1000);
                        }
                    },
                    'No': function () {
                        AMO.MonitorScheduleHalt = false;
                        // Log user activity...
                        AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true), "Crew Action:NO");
                        $.unblockUI();
                        if (AMO.UI.IsIpad == true) {
                            AMO.UI.UnBlockPage();
                            AMO.UI.ScrollTop(oldScrollTop, 1000);
                        }
                    }
                };

            } else if (t.text() == 'Cancel Request') {

                htmlString.push('<div class="button dark-gray dialog-close-button dialog-close-button-confirm-box">X</div>');
                htmlString.push('<h2 style="padding-top:10px;">Are you sure?</h2>');

                function cancelRequestedTask() {
                    // call SCHEDULER'S API to cancel a requested procedure....

                    var taskParam = {
                        'uuid': dataTaskUUID
                    };

                    // call Scheduler's API to update crew note
                    AMO.TOCA.CancelRequestedTask(taskParam, function (data) {
                        if (typeof data === 'string') {
                            // means error....
                            AMO.UI.AlertBox(data);
                            AMO.Utils.WriteConsole(data);
                        } else {
                            // no error...
                        }
                    });
                }

                actionButtons = {
                    'Yes': function () {
                        cancelRequestedTask();
                        AMO.MonitorScheduleHalt = false;
                        // Log user activity...
                        AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true), "Crew Action:YES");
                        $.unblockUI();
                        if (AMO.UI.IsIpad == true) {
                            AMO.UI.UnBlockPage();
                        }
                    },
                    'No': function () {
                        AMO.MonitorScheduleHalt = false;
                        // Log user activity...
                        AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true), "Crew Action:NO");
                        $.unblockUI();
                        if (AMO.UI.IsIpad == true) {
                            AMO.UI.UnBlockPage();
                        }
                    }
                };
            } else {
                return;
            }
            

            AMO.MonitorScheduleHalt = true;

            var dialogOpts = $.extend({},
                                  sharedDialogConfig,
                                  {
                                      title: 'Confirm ' + '<span style="font-size:0.5em; position:relative; top:-3px;">(' + t.text() + ')</span>',
                                      subtitle: selectedTask.task_name,
                                      ownhtml: htmlString.join(''),
                                      css: { width: '500px', height: dialogBoxHeight, top: '25%' },
                                      //classSubtitle: { 'display': 'none' },
                                      classSubtitle: { 'color': 'blue', 'font-style': 'italic', 'line-height': '0.99' },
                                      classInfo: { 'display': 'none' },
                                      buttons: actionButtons,
                                      displayButtons: true,
                                      displayButtonLinks: false
                                  });


            me.ShowDialog(dialogOpts);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });
        $(document).on('touchclick', '#divTocaTabReferencesProcedures div.proc-ref-tags, #divSscReferenceContent  div.proc-ref-tags', function () {
            var t = $(this);
            var a = t.prev('a');
            a.trigger('touchclick'); //.click();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });

        $(document).on('touchclick', '.drop-down', function () {
            var t = $(this);
            var containerId = t.attr('data-container-id');
            var containerBoxCss = t.attr('data-container-box');

            var dataOnShowBoxClass = t.attr('data-onshow-box-class'); //"onshow-box-class"
            var dataOnHideBoxClass = t.attr('data-onhide-box-class'); //"onhide-box-class"

            var showText = t.attr('data-show-text');
            var hideText = t.attr('data-hide-text');

            var elementName = t.attr('data-element-name');

            var dynamicURL = t.attr('data-dynamic-url');

            var showFlag = false;

            if (AMO.Utils.HasValue(elementName) === true) {
                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay(elementName);
            }

            if (containerId != null && containerId.length > 0) {
                var container = $('#' + containerId);
                var visible = container.is(':visible');
                var img = t.find('img:first');
                if (img.length > 0)
                {
                    if (visible == true) {
                        t.removeClass('no-bottom-border');
                        //container.slideUp();
                        img.attr('src', 'images/amo_circle_down_arrow.png');
                        var zi = container.css('z-index');
                        container.hide();

                        AMO.Utils.ForceScreenRefresh();

                    } else {
                        t.addClass('no-bottom-border');
                        //container.slideDown();
                        img.attr('src', 'images/amo_circle_up_arrow.png');
                        container.show();

                        AMO.Utils.ForceScreenRefresh();

                        showFlag = true;
                    }
                }
            } else if (containerBoxCss != null && containerBoxCss.length > 0) {
                //var container = t.parent().parent().find('.' + containerBoxCss);
                var container = t.parent().next('.' + containerBoxCss);
                var visible = container.is(':visible');
                var img = t.find('img:first');

                if (typeof dynamicURL !== 'undefined') {
                    var url = container.attr('data-dynamic-url');
                    container.attr('data-dynamic-url', dynamicURL);
                    if (url !== dynamicURL) {
                        container.load(dynamicURL);
                    }
                }

                if (img.length > 0) {
                    if (visible == true && !container.is(':empty')) {
                        img.attr('src', 'images/amo_circle_down_arrow.png');
                        container.hide();
                    } else {
                        img.attr('src', 'images/amo_circle_up_arrow.png');

                        if (container.is(':empty')) {
                            var url = container.attr('url');
                            var dataGraphDescriptionId = container.attr('data-graph-description-id');
                            if (AMO.Utils.StringEmpty(url) == false) {
                                // load the html file...
                                container.load(url, function () {
                                    container.show();
                                });
                            } else {
                                container.html('<span class="bold">n/a</span>');
                                container.show();
                            }
                        } else {
                            container.show();
                        }
                        showFlag = true;
                    }
                }
            }

            if (typeof showText != 'undefined' &&
                typeof hideText != 'undefined') {

                var text = t.find('span:first');

                if (showFlag) {
                    text.text(hideText);
                } else {
                    text.text(showText);
                }
            }


            if (typeof dataOnShowBoxClass != 'undefined' &&
                typeof dataOnHideBoxClass != 'undefined') {

                var dataOnHideBox = t.siblings('.' + dataOnHideBoxClass);
                var dataOnShowBox = t.siblings('.' + dataOnShowBoxClass);

                if (showFlag) {
                    dataOnHideBox.show();
                    dataOnShowBox.hide();
                } else {
                    dataOnHideBox.hide();
                    dataOnShowBox.show();
                }
            }
        });
        $(document).on('touchclick', '.drop-down-trigger', function () {
            var t = $(this);
            t.next('.drop-down').trigger('touchclick'); //.click();
        });

        // TODO: CLEANUP (obselete)
        $(document).on('touchclick', '.graph-header .title', function () {
            var t = $(this);
            t.next('div').trigger('touchclick'); //.click();
        });
        $(document).on('touchclick', '.tabs-light .toggle-tab-image-detail', function (event) {
            var t = $(this);

            var dataImageUrl = t.attr('data-image-url');
            var selectedClass = t.attr('data-selected-class');

            AMO.UI.ScrollTop(0, 500);
            
            if (t.hasClass(selectedClass)) {
                return;
            }

            // unselect all siblings first and their corresponding containers
            t.siblings().removeClass(selectedClass);

            t.addClass(selectedClass);

            var leftContent = $('#divTocaComponentDetail .content-left-panel .box-content-scrollable');
            var rightContent = $('#divTocaComponentDetail .content-right-panel .box-content-scrollable');
            var origLeftHeight = leftContent.height();

            t.parent().parent().parent().parent().find('.component-detail-content div.image-detail-container img:first, .component-detail-content-flex div.image-detail-container img:first').attr('src', dataImageUrl);

            window.setTimeout(function () {
                var leftContent = $('#divTocaComponentDetail .content-left-panel .box-content-scrollable');
                var rightContent = $('#divTocaComponentDetail .content-right-panel .box-content-scrollable');

                if (leftContent.length > 0 && rightContent.length > 0) {
                    var h = leftContent.height();
                    if (h > origLeftHeight) {
                        leftContent.css('height', h + 'px');
                    }
                    if (h > rightContent.height()) {
                        rightContent.css('height', h + 'px');
                    }
                }
            }, 500);

            // TODO: in order to eanble this, i need to change a lot of things, comment for now... enable zoom...
            if (t.text() == 'Close-up') {
                AMO.UI.ClearImageZoom();
            } else {
                if ($('#htmlControl').is(':visible')) {
                    AMO.UI.EnableImageZoom($('#htmlControl .image-detail-container img'), true);
                } else {
                    AMO.UI.EnableImageZoom($('#divTocaComponentDetail .image-detail-container img'));
                }
            }
            
            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('TAB:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
            AMO.UI.StopPropagation(event);
        });
        $(document).on('touchclick', '.show-full-screen', function () {
            // close all visible tooltips if possible..
            $('.qtip.qtip-custom-size').qtip('hide');
            var t = $(this);
            var url = t.attr('url');
            var title = t.text();

            if (AMO.Utils.StringEmpty(url) === false) {

                AMO.UI.ShowFullscreenDialog(title, url);
                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(title, true), url);
            }
            return false;
        });
        $(document).on('touchclick', '.back-button-history', function () {
            var t = $(this);
            var parentPanel = t.parent().parent();
            var hashValue = t.attr('data-hash-value');

            parentPanel.hide('fade', {}, 1000, function () {


                if (hashValue != null && hashValue.length > 0) {
                    var aTemp = hashValue.split('|');
                    if (aTemp.length >= 4) {
                        hashValue = aTemp[0] + '|' + aTemp[1] + '|' + aTemp[2];
                    }
                    AMO.UI.FlowControl([
                        function (cb) {
                            AMO.UI.SetAppHashRoute(hashValue, true);
                            cb();
                        }
                    ], function () {
                        AMO.UI.SetAppHashRoute(hashValue, false);
                    });
                }
            });

            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:BACK_HISTORY', 'Back');
        });
        $(document).on('touchclick', '.hide-full-screen', function () {
            AMO.UI.HideFullscreenDialog();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_FULL_SCREEN', 'Close fullscreen');
            return false;
        });
        $(document).on('touchclick', '[data-load-fault-indicator]', function () {
            var t = $(this);
            var code = t.attr('data-load-fault-indicator');

            me.LoadFaultIndicator(code, false); // don't log as the SetAppHashRouteAuto will log it

            AMO.UI.SetAppHashRouteAuto(code, true);

            return false;
        });
        $(document).on('touchclick', '.tabs-light .toggle-tab', function (event) {
            var t = $(this);

            var containerId = t.attr('data-container-id');
            var buttonShowText = t.attr('data-button-show-text');
            var buttonHideText = t.attr('data-button-hide-text');
            var selectedClass = t.attr('data-selected-class');

            if (AMO.Model.selectedTocaTabId() === 3) {
                AMO.Model.selectedTocaTabComponentIndex = t.index();
            }
            if (AMO.UI.SuppressHashUpdate == false) {
                AMO.UI.SetAppHashRoute('0|3|' + t.index(), true);
            }

            if (typeof selectedClass != 'undefined') {
                t.addClass(selectedClass);
            }

            // unselect all siblings first and their corresponding containers
            t.siblings().each(function () {
                var t2 = $(this);
                var containerId2 = t2.attr('data-container-id');
                t2.removeClass(selectedClass);
                $('#' + containerId2).hide();
            });
            $('#divTocaComponentDetail').hide();

            if (containerId != null && containerId.length > 0) {

                if (containerId == "divTocaOperationalOverview") {
                    AMO.UI.EnableImageZoom($('#divTocaOperationalOverview .image-detail-container img'));
                } else if (containerId == "divTocaStates") {
                    if ($('#divTocaSchematicDetail').is(':visible') == false) {
                        $('#divSchematicListContent a').eq(0).trigger('click'); // .click();
                    }
                    AMO.UI.EnableImageZoom($('#divTocaSchematicDetail .image-detail-container img'));
                } else {
                    AMO.UI.ClearImageZoom();
                }

                if (typeof buttonHideText != 'undefined') {
                    t.text(buttonHideText);
                }
                if (typeof selectedClass != 'undefined') {
                    t.addClass(selectedClass);
                }

                $('#' + containerId).show();

                AMO.UI.ScrollTop(0, 1000);
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('TAB:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
            AMO.UI.StopPropagation(event);
        });

        $(document).on('touchclick', 'div.dialog-close-button', function () {
            var t = $(this);
            var dialogId = t.attr('data-dialog-id');
            if (dialogId == null) {
                $.unblockUI();
                var scrollTop = t.attr('data-original-scroll-top');
                if (scrollTop != null) {
                    if (AMO.UI.IsIpad == true) {
                        AMO.UI.ScrollTop(scrollTop, 1000);
                    }
                }
            } else {
                $('#' + dialogId).hide('fade', {}, 500, function () {
                    $('#' + dialogId + 'Block').hide('fade', {}, 100);
                });
            }
            if (AMO.UI.IsIpad == true) {
                AMO.UI.UnBlockPage();
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_DIALOG');
        });

        $(document).on('touchclick', 'div.dialog-close-button-bottom', function () {
            var t = $(this);
            var dialogId = t.attr('data-dialog-id');
            AMO.UI.HideDialogBox(dialogId);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_DIALOG');
        });

        $(document).on('touchclick', 'div.dialog-open-button', function () {
            var t = $(this);
            var dialogId = t.attr('data-dialog-id');
            AMO.UI.ShowDialogBox(dialogId);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:OPEN_DIALOG');
        });

        // catch all document click...
        $(document).on('touchclick', function (event) {
            AMO.UI.CloseAllDropDownsAndPopups();
            AMO.UI.CloseGraphSelectionStateList();
        });
        $(document).on('touchclick', 'div.qtip', function (event) {
            AMO.UI.StopPropagation(event);
        });
        $(document).on('touchclick', '.suppress-catch-all-click', function (event) {
            AMO.UI.StopPropagation(event);
        });


        $(document).on('click', '.button[data-script-text]', function () {
            var t = $(this);
            var scriptToExecute = t.attr('data-script-text');
            if (typeof scriptToExecute == 'undefined') {
                return;
            }
            eval(scriptToExecute);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });
        $(document).on('click', '.goto-fault-indicator-screen', function () {
            // close all visible tooltips if possible..
            $('.qtip.qtip-custom-size').qtip('hide');
            var t = $(this);
            var code = t.attr('fault_indicator_code');
            var title = t.text();

            if (AMO.Utils.StringEmpty(url) === false) {
                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(title, true));

                AMO.Model.selectTocaTabIndex(4);

                AMO.UI.LoadFaultIndicator(code, false);
                AMO.UI.SetAppHashRouteAuto(code, true);
            }
            return false;
        });
        $(document).on('click', '.goto-component-states-screen', function () {
            // close all visible tooltips if possible..
            $('.qtip.qtip-custom-size').qtip('hide');
            var t = $(this);
            var state = t.text();

            if (AMO.Utils.StringEmpty(state) === false) {
                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(state, true));

                var schematicID = 0;
                $('#divSchematicListContent a').each(function () {
                    var t = $(this);
                    if (t.text() == state) {
                        schematicID = t.attr('data-schematic-id');
                        return;
                    }
                });

                var hash = '0|3|5|' + schematicID;

                AMO.UI.FlowControl([
                            function (cb) {
                                AMO.UI.SetAppHashRoute(hash, true);
                                cb();
                            }
                ], function () {
                    AMO.UI.SetAppHashRoute(hash, false);
                });
            }
            return false;
        });
        $(document).on('click', '.goto-component-screen', function () {
            // close all visible tooltips if possible..
            $('.qtip.qtip-custom-size').qtip('hide');
            var t = $(this);
            var componentName = t.text();
            var componentID = t.attr('data-component-id');
            var hash = '';

            // check if this selected componentid has corresponding UI destination
            var componentIds = [];
            $('area[data-component-id]').each(function () {
                var t = $(this);
                componentIds.push(t.attr('data-component-id'));
            });

            if (AMO.Utils.InArray(componentIds, componentID) === false) {
                var url = t.attr('url');
                if (AMO.Utils.StringContains(url, 'operational-overview.htm')) {
                    hash = '0|3|0';
                    AMO.UI.FlowControl([
                            function (cb) {
                                AMO.UI.SetAppHashRoute(hash, true);
                                cb();
                            }
                    ], function () {
                        AMO.UI.SetAppHashRoute(hash, false);
                    });
                } else {
                    AMO.UI.LoadReferenceDetails(componentName, url);
                }
                
                return false;
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(componentName, true));

            var containerID = null;
            var componentIndex = -1;
            if ($('#divTocaFrontOutside area[data-component-id=' + componentID + ']').length > 0) {
                containerID = 1;
                $('#divTocaFrontOutside area[data-component-id]').each(function () {
                    var t = $(this);
                    componentIndex++;
                    if (t.attr('data-component-id') == componentID) {
                        return false;
                    }
                });
            } else if ($('#divTocaFrontInside area[data-component-id=' + componentID + ']').length > 0) {
                containerID = 2;
                $('#divTocaFrontInside area[data-component-id]').each(function () {
                    var t = $(this);
                    componentIndex++;
                    if (t.attr('data-component-id') == componentID) {
                        return false;
                    }
                });
            } else if ($('#divTocaBackInside area[data-component-id=' + componentID + ']').length > 0) {
                containerID = 3;
                $('#divTocaBackInside area[data-component-id]').each(function () {
                    var t = $(this);
                    componentIndex++;
                    if (t.attr('data-component-id') == componentID) {
                        return false;
                    }
                });
            } else if ($('#divTocaSchematic area[data-component-id=' + componentID + ']').length > 0) {
                containerID = 4;
                $('#divTocaSchematic area[data-component-id]').each(function () {
                    var t = $(this);
                    componentIndex++;
                    if (t.attr('data-component-id') == componentID) {
                        return false;
                    }
                });
            }

            hash = '0|3|' + containerID + '|' + componentIndex;

            AMO.Utils.WriteConsole(hash);

            AMO.UI.FlowControl([
                            function (cb) {
                                AMO.UI.SetAppHashRoute(hash, true);
                                cb();
                            }
            ], function () {
                AMO.UI.SetAppHashRoute(hash, false);
            });
        });

        $(document).on('click', '.goto-reference-detail-screen', function () {
            var t = $(this);
            var url = t.attr('url');
            var index = t.attr('data-index');
            var parentIndex = t.attr('data-parent-index');
            var title = t.text();
           
            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(title, true), url);

            AMO.UI.LoadReferenceDetails(title, url, index, parentIndex);

            return false;
        });
        $(document).on('click', '.goto-ssc-reference-detail-screen', function () {
            var t = $(this);
            var url = t.attr('url');
            var index = t.attr('data-index');
            var parentIndex = t.attr('data-parent-index');
            var title = t.text();

            // Log user activity....
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(title, true), url);

            AMO.UI.LoadSscReferenceDetails(title, url, index, parentIndex);

            return false;
        });

        $(document).on('click', '[data-goto]', function () {
            //window.alert('test');
            var t = $(this);
            var metaData = t.attr('data-goto');
            var tempArr = metaData.split('#');
            var gotoTAB = $.trim(tempArr[0].toUpperCase());

            AMO.UI.GoToSpecificItem = '';
            if (tempArr.length > 0) {
                AMO.UI.GoToSpecificItem = $.trim(tempArr[1]);
            }

            if (gotoTAB.toUpperCase() === 'DATA' && AMO.UI.GoToSpecificItem === '') {
                AMO.UI.GoToSpecificItem = 'TOCRESULTSTRENDGRAPH';
            }

            $('#tocaTabContainer li').each(function () {
                var t = $(this);
                var text = $.trim(t.text().toUpperCase());
                if (text === gotoTAB) {
                    t.trigger('click');

                    if ($('#htmlControl').is(':visible')) {
                        AMO.UI.HideFullscreenDialog();
                    }

                    // Log user activity...
                    AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true), 'Navigate');

                    return;
                }
            });
        });

        $(document).on('touchclick', '[data-goto-ssc-chart]', function () {
            //window.alert('test');
            var t = $(this);
            var metaData = t.attr('data-goto-ssc-chart');
            var tempArr = metaData.split('#');
            var gotoTAB = $.trim(tempArr[0].toUpperCase());

            AMO.UI.GoToSpecificItem = '';
            if (tempArr.length > 0) {
                AMO.UI.GoToSpecificItem = $.trim(tempArr[1]);
            }

            $('#sscTabContainer li').each(function () {
                var t = $(this);
                var text = $.trim(t.text().toUpperCase());
                if (text === gotoTAB) {
                    t.trigger('click');
                    // Log user activity...
                    AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(text, true), 'Navigate');
                    return;
                }
            });
        });
        $(document).on('touchclick', '#divTaskGrid .crew-note-more-flag span', function () {
            var t = $(this);
            var text = t.text();
            var crewNoteFlag = t.parent();
            var crewNoteContainer = crewNoteFlag.prev();
            var crewNoteContainerId = crewNoteContainer.attr('data-crew-note-container-id');

            if (text === '[more]') {
                t.text('[less]');
                crewNoteContainer.css('height', 'auto');
                _crewNoteContainerIds[crewNoteContainerId] = 'auto';
            } else {
                t.text('[more]');
                crewNoteContainer.css('height', '35px');
                _crewNoteContainerIds[crewNoteContainerId] = null;
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:' + text);
        });

        $(document).on('click', '[data-popup]', function () {
            // data-popup="Procedure_History"
            var t = $(this);
            var popupName = t.attr('data-popup');
            if (popupName === 'Procedure_History') {
                AMO.UI.ShowTaskHistoryDialog();
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(popupName, true));
        });
        $(document).on('click', 'a[data-procedure-id]', function () {
            var t = $(this);
            var procedureId = t.attr('data-procedure-id');
            var url = AMO.Data.GetProcedureUrl(procedureId);
            var w = window.open(url, "_blank");
            w.focus();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:PROCEDURE', t.text() + '[' + url + ']');
        });
        $(document).on('click', 'a[data-procedure-url]', function () {
            var t = $(this);
            var url = t.attr('data-procedure-url');
    
            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:PROCEDURE', t.text() + '[' + url +']');
            return true;
        });

        $(document).on('click', '[data-ssc-procedure-id]', function (event) {

            AMO.UI.StopPropagation(event);

            var t = $(this);
            var procedureId = t.attr('data-ssc-procedure-id');
            var url = AMO.Data.GetSSCProcedureUrl(procedureId);
            var w = window.open(url, "_blank");
            w.focus();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:PROCEDURE', t.text() + '[' + url + ']');
        });

        $(document).on('click', '#divPlotList a', function (event) {
            var t = $(this);
            var plotId = t.attr('data-plot-id');
            if (t.parent().hasClass('selected') == true) {
                return;
            }
            var plotIndex = parseInt(t.attr('data-plot-index'));

            AMO.UI.StopPropagation(event);
            AMO.UI.ScrollTop(0);
            AMO.UI.CloseAllDropDownsAndPopups();
            AMO.UI.CloseGraphSelectionStateList();

            AMO.UI.UpdatePlotPreviousNextButtons('TOCA', plotIndex);

            AMO.Model.toca_selected_plot_id(plotId);

            AMO.UI.ResetGraphUI();

            AMO.UI.LoadGraph();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });
        $(document).on('click', '#divPlotListSSC a', function (event) {
            var t = $(this);
            var plotId = t.attr('data-plot-id');
            if (t.parent().hasClass('selected') == true) {
                return;
            }
            var plotIndex = parseInt(t.attr('data-plot-index'));

            AMO.UI.StopPropagation(event);
            AMO.UI.ScrollTop(0);
            AMO.UI.CloseAllDropDownsAndPopups();
            AMO.UI.CloseGraphSelectionStateList();

            AMO.UI.UpdatePlotPreviousNextButtons('SSC', plotIndex);

            AMO.Model.ssc_selected_plot_id(plotId);

            AMO.UI.ResetGraphUISSC();

            AMO.UI.LoadGraphSSC();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });
        $(document).on('click', '#divAddATaskDialog input:checkbox[name="when"]', function () {
            var t = $(this);
            var label = t.next('label').text();

            $('#divAddATaskValidationErrorMessage').hide();

            t.siblings().prop('checked', false);
            t.prop('checked', true);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('CHECK-BOX:' + AMO.Utils.StringReplaceSpaceWithUnderscore(label, true));
        });
        $(document).on('click', '#divTaskSelection ul li', function () {
            var t = $(this);

            var radio = t.find('input');

            radio.prop('checked', true);

            $('#divAddATaskValidationErrorMessage').hide();

            var txtCrewNotes = $('#txtCrewNotes');

            if (txtCrewNotes.attr('data-procedure-id') == null) {
                txtCrewNotes.attr('data-procedure-id', radio.val());
            }

            var clearValue = (txtCrewNotes.attr('data-procedure-id') != radio.val());
            if (clearValue == true) {
                txtCrewNotes.val('');
            }
            txtCrewNotes.attr('data-procedure-id', radio.val());

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('RADIO-BUTTON:TASK_SELECTION_PROCEDURE', 'Add A Task Dialog - ' + radio.val());
        });
        

        // initialize all statically declared elements/objects
        $('img.amo-logo').on('touchclick', function () {
            AMO.Model.selectToolMenuIndex(-1);
        });

        $('#divTocaRunDropDown div:first, #divSscDropDown div:first').on('touchclick', function (event) {
            var t = $(this);

            var containerId = t.attr('data-container-id');
            var elementName = t.attr('data-element-name');
            var arrowText = t.find('.arrow-text');

            //if (AMO.UI.CurrentClickedElement != null && AMO.UI.CurrentClickedElement.data() != t.data()) {
            //    AMO.UI.CurrentClickedElement.trigger('touchclick'); // .click();
            //    AMO.UI.CurrentClickedElement = null;
            //}

            //if (AMO.UI.GraphIFrameControl != null && typeof AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO != 'undefined') {
            //    AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO.Graph.HideSelectionList();
            //}

            if (containerId != null && containerId.length > 0) {
                var container = $('#' + containerId);
                var visible = container.is(':visible');

                //if (AMO.UI.CurrentPopupBox != null && AMO.UI.CurrentPopupBox.data() != container.data()) {
                //    AMO.UI.CurrentPopupBox.hide();
                //    AMO.UI.CurrentPopupBox = null;
                //}

                AMO.UI.CloseAllDropDownsAndPopups(t, container);
                AMO.UI.CloseGraphSelectionStateList();

                if (AMO.Utils.HasValue(elementName) === true) {
                    // Log user activity...
                    AMO.Utils.SetUserActivityLogAuto(elementName);
                }

                if (visible == true) {
                    arrowText.text('▼');

                    t.removeClass('no-bottom-border');
                    container.hide();
                    AMO.UI.CurrentClickedElement = null;
                    AMO.Utils.ForceScreenRefresh();
                    
                } else {
                    arrowText.text('▲');

                    t.addClass('no-bottom-border');
                    container.show();
                    var scrollContainer = container.find('div.table');
                    if (scrollContainer.length > 0) {
                        scrollContainer.scrollTo('#' + containerId + ' div.table table tr.selected', {offsetTop: 180});
                    }
                    
                    AMO.UI.CurrentClickedElement = t;
                }
                AMO.Utils.ForceScreenRefresh();
                AMO.UI.StopPropagation(event);
            } 
        });
        $('#ddlSSCSortField').on('change', function (event) {
            var t = $(this);
            var chkSSCSortFlag = $('#chkSSCSortFlag');
            var columnName = t.val();
            var isAscending = chkSSCSortFlag.is(':checked');

            if (columnName === 'locationSortOrder') {
                chkSSCSortFlag.next('span').text(isAscending === true ? 'Fwd to Aft' : 'Aft to Fwd');
            } else {
                chkSSCSortFlag.next('span').text(isAscending === true ? 'Ascending' : 'Descending');
            }
        
            var sscs = AMO.Model.SSCHosts();
            AMO.Utils.SortArray(sscs, columnName, false, isAscending);
            AMO.Model.SSCHosts(sscs);

            AMO.Utils.SetCookie("SSCGridSortOrder", columnName + '|' + isAscending);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('DROP-DOWN-LIST:SSC_SORT', columnName + (isAscending === true ? ' in ascending' : 'in descending'));
        });

        $('#chkSSCSortFlag').on('click', function (event) {
            var t = $(this);
            var columnName = $('#ddlSSCSortField').val();
            var isAscending = t.is(':checked');
            var chkSSCSortFlag = t.next('span');
            if (columnName === 'locationSortOrder') {
                chkSSCSortFlag.text(isAscending === true ? 'Fwd to Aft' : 'Aft to Fwd');
            } else {
                chkSSCSortFlag.text(isAscending === true ? 'Ascending' : 'Descending');
            }
        
            var sscs = AMO.Model.SSCHosts();
            AMO.Utils.SortArray(sscs, columnName, false, isAscending);
            AMO.Model.SSCHosts(sscs);

            AMO.Utils.SetCookie("SSCGridSortOrder", columnName + '|' + isAscending);
           
            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('CHECK-BOX:SSC_SORT', columnName + (isAscending === true ? ' in ascending' : 'in descending'));
        });
        $('#divTOCAPlotTopBar .img-plot-button').on('touchclick', function (event) {
            var t = $(this);
            var divPlotList = $('#divPlotList');
            var selectedPlot = divPlotList.find('li.selected');

            if (selectedPlot.length == 0) {
                return;
            }

            var plotIndex = parseInt(selectedPlot.children('a').eq(0).attr('data-plot-index'));

            if (t.hasClass('button-disable')) {
                return;
            }

            if (t.hasClass('previous')) {
                plotIndex--;
            } else if (t.hasClass('next')) {
                plotIndex++;
            }
            AMO.UI.UpdatePlotPreviousNextButtons('TOCA', plotIndex);

            selectedPlot = divPlotList.find('a[data-plot-index=' + plotIndex + ']');
            if (selectedPlot.length > 0) {
                selectedPlot.trigger('click');
                // Log user activity...    
                AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:SELECT_TOCA_CHART', selectedPlot.text());
            }
        });
        $('#divSSCPlotTopBar .img-plot-button').on('touchclick', function (event) {
            var t = $(this);
            var divPlotList = $('#divPlotListSSC');
            var selectedPlot = divPlotList.find('li.selected');

            if (selectedPlot.length == 0) {
                return;
            }

            var plotIndex = parseInt(selectedPlot.children('a').eq(0).attr('data-plot-index'));

            if (t.hasClass('button-disable')) {
                return;
            }

            if (t.hasClass('previous')) {
                plotIndex--;
            } else if (t.hasClass('next')) {
                plotIndex++;
            }
            AMO.UI.UpdatePlotPreviousNextButtons('SSC', plotIndex);

            selectedPlot = divPlotList.find('a[data-plot-index=' + plotIndex + ']');
            if (selectedPlot.length > 0) {
                selectedPlot.trigger('click');
                // Log user activity...    
                AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:SELECT_SSC_CHART', selectedPlot.text());
            }
        });
        $('#divSchematicNextPrev img').on('touchclick', function () {
            var t = $(this);
            var schematicId = t.attr('data-schematic-id');
            if (typeof schematicId === 'undefined') {
                return;
            }
            if (t.hasClass('button-disable')) {
                return;
            }

            if ($('#divSchematicListContent').is(':visible')) {
                $('#divSchematicComboBox').trigger('touchclick'); // .click();
            }
            AMO.UI.CurrentClickedElement = null;

            schematicId = parseInt(schematicId, 10); // - 1;
            if (t.hasClass('schematic-prev-button')) {
                $('#divSchematicListContent a').attr('data-effect', 'slide-left');
            } else {
                $('#divSchematicListContent a').attr('data-effect', 'slide-right');
            }

            var $SchematicLink = $('#divSchematicListContent a').eq(schematicId);

            $SchematicLink.trigger('click'); // .click();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore($SchematicLink.text(), true));
        });

        function performSearch(that) {
            var t = that;

            if (AMO.Model.selectedToolMenuId() != 2) {
                AMO.UI.ScrollTop(0);
            }

            var textSearch = $.trim(t.val());
            var arrText = textSearch.split(',');
            if (textSearch == '') {
                $('.search-box-clear img:first').hide();
            } else {
                $('.search-box-clear img:first').show();
            }

            var keyLog = null;
            switch (AMO.Model.selectedToolMenuId()) {
                case 0:
                    keyLog = 'TEXT-BOX:SEARCH_TOCA_REFERENCES';
                    AMO.TOCA.SearchTOCAReferences(arrText);
                    break;
                case 1:
                    keyLog = 'TEXT-BOX:SEARCH_SSC_REFERENCES';
                    AMO.SSC.SearchSSCReferences(arrText);
                    break;
                case 2:
                    if (textSearch == '') {
                        $('#divFindPrevNextPanel div:first').hide('slide', { direction: 'up' }, 500, function () {
                            $('#divFindPrevNextPanel').hide();
                            $('#divFindPrevNextPanel td.text-search').text('');
                        });
                    } else {
                        $('#divFindPrevNextPanel td.text-search').text('');
                        $('#divFindPrevNextPanel').show();
                        // $('#divFindPrevNextPanel div:first').show();
                        $('#divFindPrevNextPanel div:first').show('slide', { direction: 'up' }, 1000);
                    }

                    keyLog = 'TEXT-BOX:SEARCH_HELP';
                    AMO.UI.SearchHelp(arrText);
                    break;
                default:
                    break;
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto(keyLog, textSearch);
        };

        if (AMO.UI.IsIpad == true) {
            $topHeader = $('.top-bar-fixed');
            $leftNav = $('.help-container .nav-panel div:first');
        }

        $('#SearchBoxText').on('focus', function () {
            var hash = null;
            var t = $(this);
            switch (AMO.Model.selectedToolMenuId()) {
                case 0:
                    AMO.Model.selectTocaTabIndex(5);
                    hash = '0|5|0';
                    break;
                case 1:
                    AMO.Model.selectSscTabById(3);
                    hash = '1|3';
                    break;
                case 2:

                    if ($.trim(t.val()) == '') {
                        AMO.UI.ScrollTop(0);
                    }
                    if ($topHeader != null) {
                        $topHeader.addClass('fix-fixed');
                        $leftNav.addClass('fix-fixed');
                    }
                    break;
                default:
                    break;
            }

            $('#divTocaReferenceContainer').show();
            $('#divTocaReferenceDetail').hide();
            $('#divTocaReferenceDetailVideo').hide();

            // AMO.UI.ClearVideo();
            // pause all videos...
            AMO.UI.PauseAllHelpVideos();

            if (AMO.UI.SuppressHashUpdate == false && hash != null) {
                AMO.UI.SetAppHashRoute(hash, true);
            }
        }).on('blur', function () {
            if (AMO.Model.selectedToolMenuId() == 2) {
                if ($topHeader != null) {
                    $topHeader.removeClass('fix-fixed');
                    $leftNav.removeClass('fix-fixed');
                    // $topHeader.css({ 'position': 'fixed' });
                    // $('.top-bar-fixed').css({ 'top': '0px', 'background-color': topHeaderBackcolor });
                }
            }
        }).on('keyup', function () {
            var t = $(this);
            if (SearchBoxTextTimerId != null) {
                window.clearTimeout(SearchBoxTextTimerId);
            }
            SearchBoxTextTimerId = window.setTimeout(function () {
                performSearch(t);
            }, 1000);
        }).on('paste', function () {
            var t = $(this);
            if (SearchBoxTextTimerId != null) {
                window.clearTimeout(SearchBoxTextTimerId);
            }
            SearchBoxTextTimerId = window.setTimeout(function () {
                performSearch(t);
            }, 1000);
        });

        $('#divFindPrevNextPanel td.text-search-nav-button').on('click', function () {
            //.attr('data-current-index', index);
            var t = $(this);
            if (t.hasClass('button-disable')) {
                return;
            }
            var direction = t.attr('data-direction');
            var currentIndex = parseInt(t.attr('data-current-index'));
            var currentNewIndex = 0;

            if (direction == 'previous') {
                currentNewIndex = currentIndex - 1;
            } else if (direction == 'next') {
                currentNewIndex = currentIndex + 1;
            }

            AMO.UI.ScrollToSelectedHighlight(currentNewIndex);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:TEXT_SEARCH_NAVIGATE', direction);
       }); 
        $('.data-tab-container div.tab[data-scroll-to-element]').on('click', function () {
            var t = $(this);
            var scrollToElementId = t.attr('data-scroll-to-element');
        
            $('.data-tab-container div.tab[data-scroll-to-element]').removeClass('tab-selected');

            t.addClass('tab-selected');

            if (scrollToElementId == 'FrameGraphContainerTrendPlots') {
                $('#FrameGraphContainerPerRunPlots').hide();
                $('#FrameGraphContainerTrendPlots').show();
            } else if (scrollToElementId == 'FrameGraphContainerPerRunPlots') {
                $('#FrameGraphContainerTrendPlots').hide();
                $('#FrameGraphContainerPerRunPlots').show();
            }

            AMO.UI.ScrollTop(0, 1000);
        });

        $(document).on('click', 'ul li a[data-scroll-to-element]', function () {
            var t = $(this);
            var scrollToElementId = t.attr('data-scroll-to-element');
            var dataIndex = t.attr('data-index');
            var offsetElement = t.attr('data-offset-element');
            var parentElement = t.attr('data-parent-element');

            if (typeof dataIndex === 'undefined') dataIndex = '';

            // var offset = $('#nav_procedures').offset().top;  //173;
            var offset = $('#' + offsetElement).offset().top;  //173;

            $('html, body').scrollTop($('#' + scrollToElementId).offset().top - offset);

            if (parentElement === 'divSscReferenceContainer' && dataIndex !== '') {
                AMO.Model.selectedTocaTabReferenceIndex = parseInt(dataIndex);
            } else if (parentElement === 'divReferenceContainer' && dataIndex !== '') {
                AMO.Model.selectedSscTabReferenceIndex = parseInt(dataIndex);
            }

            AMO.UI.SetAppHashRouteAuto(dataIndex, true);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(t.text(), true));
        });


        $('#FeedbackText').on('keyup', function () {
            var t = $(this);
            t.removeClass('error-border');
            $('#FeedbackErrorText').hide();

            var FeedbackCancelButton = $('#FeedbackCancelButton');
            if ($.trim(t.val()) != '') {
                FeedbackCancelButton.show();
            } else {
                FeedbackCancelButton.hide();
            }
        }).on('paste', function () {
            var t = $(this);
            window.setTimeout(function () {
                t.removeClass('error-border');
                $('#FeedbackErrorText').hide();

                var FeedbackCancelButton = $('#FeedbackCancelButton');
                if ($.trim(t.val()) != '') {
                    FeedbackCancelButton.show();
                } else {
                    FeedbackCancelButton.hide();
                }
            }, 1000);
        });

        $('#FeedbackSubmitButton').on('touchclick', function () {
            var t = $(this);
            var FeedbackText = $('#FeedbackText');
            if (t.text() === 'Submit') {
                var feedBackText = FeedbackText.val();

                AMO.TOCA.SendFeedback();

                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('BUTTON:FEEDBACK_SUBMIT', feedBackText);

            } else if (t.text() == 'Write Feedback') {
                var FeedbackSubmittedText = $('#FeedbackSubmittedText');
                var FeedbackSubmitButton = $('#FeedbackSubmitButton');
            
                FeedbackSubmittedText.hide('fade', {}, 100, function () {
                    FeedbackText.show();
                    FeedbackText.focus();
                    FeedbackSubmitButton.text('Submit');
                });
                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('BUTTON:WRITE_FEEDBACK');
            }
        });
        $('#FeedbackCancelButton').on('touchclick', function () {
            var FeedbackText = $('#FeedbackText');
            FeedbackText.val('');
            $(this).hide();

            if (AMO.UI.IsIpad === true) {
                AMO.UI.ScrollTop(0, 500);
                window.setTimeout(function () {
                    AMO.UI.ScrollTop(FeedbackText.offset().top - 20, 500);
                    window.setTimeout(function () { FeedbackText.focus(); }, 1000);
                }, 500);
            } else {
                window.setTimeout(function () { FeedbackText.focus(); }, 1000);
            }
            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:FEEDBACK_CANCEL');
        });
        $('#buttonCloseTaskHistoryDialog').on('touchclick', function () {
            $('#divTaskHistoryDialog').hide('fade', {}, 500, function () {
                $('#divTaskHistoryDialogBlock').hide('fade', {}, 100);
            });

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_TASK_HISTORY_DIALOG');
        });
        $('#divGrowl div:first').on('touchclick', function () {
            AMO.UI.AcknowledgeGrowl = true;
            $('#divGrowl').hide('fade', {}, 1000);

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('BUTTON:ACKNOWLEDGE_GROWL');
        });

        $('.img-sample-button').on('touchclick', function (event) {
            var t = $(this);
            
            AMO.UI.PreventDefault(event);
            AMO.UI.StopPropagation(event);

            if (t.hasClass('button-disable')) {
                return;
            }

            var divTocaRunList = $('#divTocaRunList');
            var selectedSample = divTocaRunList.find('table tbody tr.selected');
            var selectedSampleIndex = -1;
            if (selectedSample.length > 0) {
                selectedSampleIndex = parseInt(selectedSample.attr('data-sample-index'),10);
            }

            if (t.hasClass('previous')) {
                selectedSampleIndex--;
            } else if (t.hasClass('next')) {
                selectedSampleIndex++;
            } 

            AMO.UI.CloseAllDropDownsAndPopups();
            AMO.UI.CloseGraphSelectionStateList();

            selectedSample = divTocaRunList.find('table tbody tr[data-sample-index=' + selectedSampleIndex + ']');
            if (selectedSample.length > 0) {
                selectedSample.trigger('click'); // .click();
            }
        });
        $('.img-ssc-button').on('touchclick', function (event) {
            var t = $(this);

            AMO.UI.PreventDefault(event);
            AMO.UI.StopPropagation(event);

            if (t.hasClass('button-disable')) {
                return;
            }

            var divSscList = $('#divSscList');
            var selectedSsc = divSscList.find('table tbody tr.selected');
            var selectedSscIndex = -1;
            if (selectedSsc.length > 0) {
                selectedSscIndex = parseInt(selectedSsc.attr('data-ssc-index'), 10);
            }

            if (t.hasClass('previous')) {
                selectedSscIndex--;
            } else if (t.hasClass('next')) {
                selectedSscIndex++;
            }

            AMO.UI.CloseAllDropDownsAndPopups();
            AMO.UI.CloseGraphSelectionStateList();

            selectedSsc = divSscList.find('table tbody tr[data-ssc-index=' + selectedSscIndex + ']');
            if (selectedSsc.length > 0) {
                selectedSsc.trigger('click'); // .click();
            }
        });
        $('.toca-sample-sort-column').on('touchclick', function (event) {
            var t = $(this);
            var columnName = t.attr('data-column-name');
            var columnText = t.attr('data-column-text');

            t.siblings().each(function () {
                var t2 = $(this);
                t2.text(t2.attr('data-column-text'));
            });

            var isAscending = (t.text().indexOf('▼') != -1);

            t.text(isAscending ? columnText + ' ▲' : columnText + ' ▼');

            var samples = AMO.Model.tocaDirectoryList();
            AMO.Utils.SortArray(samples, columnName, false, isAscending);
            AMO.Model.tocaDirectoryList(samples);

            AMO.Utils.SetCookie("TOCASampleRunListSortOrder", columnName + '|' + isAscending);

            AMO.UI.StopPropagation(event);

            window.setTimeout(function () { AMO.UI.UpdateSampleRunPreviousNextButtons(); }, 1000);

            AMO.Utils.SetUserActivityLogAutoDelay('DROP-DOWN-BOX:TOCA_SAMPLE', 'Sorting TOCA Sample: ' + columnName + ' - ' + (isAscending ? ' ascending' : ' descending'));

        });
        $('.ssc-sort-column').on('touchclick', function (event) {
            var t = $(this);
            var columnName = t.attr('data-column-name');
            var columnText = t.attr('data-column-text');

            t.siblings().each(function () {
                var t2 = $(this);
                t2.text(t2.attr('data-column-text'));
            });

            var isAscending = (t.text().indexOf('▼') != -1);
            t.text(isAscending ? columnText + ' ▲' : columnText + ' ▼');
            
            var sscs = AMO.Model.SSCHostList();
            AMO.Utils.SortArray(sscs, columnName, false, isAscending);
            AMO.Model.SSCHostList(sscs);
            AMO.UI.StopPropagation(event);

            AMO.Utils.SetCookie("SSCListSortOrder", columnName + '|' + isAscending);

            window.setTimeout(function () { AMO.UI.UpdateSSCPreviousNextButtons(); }, 1000);

            AMO.Utils.SetUserActivityLogAutoDelay('DROP-DOWN-BOX:SSC','Sorting SSC List: ' + columnName + ' - ' + (isAscending ? ' ascending' : ' descending'));

        });
        $('.ssc-alert-history-sort-column').on('touchclick', function (event) {
            var t = $(this);
            var columnName = t.attr('data-column-name');
            var columnText = t.attr('data-column-text');


            t.siblings().each(function () {
                var t2 = $(this);
                t2.text(t2.attr('data-column-text'));
            });

            var isAscending = (t.text().indexOf('▼') != -1);
            var columnTextString = isAscending ? columnText + ' ▲' : columnText + ' ▼';

            t.text(columnTextString);

            // ----------------------------------------------------------------
            // synch ---
            var tableHeadersToSync = t.attr('data-table-to-sync-id');
            if (typeof tableHeadersToSync != 'undefined' || tableHeadersToSync != null) {
                $('#' + tableHeadersToSync + ' .ssc-alert-history-sort-column').each(function () {
                    var t2 = $(this);
                    var cn = t2.attr('data-column-name');
                    if (cn == columnName) {
                        t2.text(columnTextString);
                    } else {
                        t2.text(t2.attr('data-column-text'));
                    }
                });
            }
            // ----------------------------------------------------------------

            var sscAlertHistory = AMO.Model.currentSSCAlertHistory();

            AMO.Utils.SortArray(sscAlertHistory, columnName, false, isAscending);
            AMO.Model.currentSSCAlertHistory(sscAlertHistory);

            $('#divAlertHistoryScrollableContent').scrollTop(0);

            AMO.Utils.SetUserActivityLogAutoDelay('DIALOG-BOX:SSC','Sorting SSC Alert History: ' + columnName + ' - ' + (isAscending ? ' ascending' : ' descending'));
        });
        $('.task-history-sample-sort-column').on('touchclick', function (event) {
            var t = $(this);
            var columnName = t.attr('data-column-name');
            var columnText = t.attr('data-column-text');

            t.siblings().each(function () {
                var t2 = $(this);
                t2.text(t2.attr('data-column-text'));
            });

            var isAscending = (t.text().indexOf('▼') != -1);
            t.text(isAscending ? columnText + ' ▲' : columnText + ' ▼');

            var taskHistory = AMO.Model.tocaTasksHistory();

            AMO.Utils.SortArray(taskHistory, columnName, false, isAscending);
            AMO.Model.tocaTasksHistory(taskHistory);

            $('#divTaskHistoryScrollableContent').scrollTop(0);

            AMO.Utils.SetUserActivityLogAutoDelay('DIALOG-BOX:TASK_HISTORY','Sorting Task History: ' + columnName + ' - ' + (isAscending ? ' ascending' : ' descending'));

        });
        $('.plot-toolbar-button').on('touchclick', function (event) {
            var t = $(this);

            var dataType = t.attr('data-type');

            var GraphDetailsContent;

            //if (AMO.UI.CurrentClickedElement != null) {
            //    AMO.UI.CurrentClickedElement.trigger('touchclick'); // .click();
            //    AMO.UI.CurrentClickedElement = null;
            //}

            //if (AMO.UI.GraphIFrameControl != null && typeof AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO != 'undefined') {
            //    AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO.Graph.HideSelectionList();
            //}

            if (dataType === 'TOCA') {
                // TOCA
                GraphDetailsContent = $('#GraphDetailsContent');
            } else {
                // SSC
                GraphDetailsContent = $('#GraphDetailsContentSSC');
            }

            AMO.UI.CloseAllDropDownsAndPopups(t, GraphDetailsContent);
            AMO.UI.CloseGraphSelectionStateList();

            if (t.text() === 'Plot Help') {
                var top = t.position().top + t.height() + 15;
                var left = t.position().left - (GraphDetailsContent.width() - 45);
                
                GraphDetailsContent.css({'top': top + 'px', 'left': left + 'px'});
                GraphDetailsContent.toggle();

                GraphDetailsContent.scrollTop(0);

                AMO.UI.CurrentPopupBox = GraphDetailsContent;

                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:PLOT_HELP');
            
            }
            else if (t.text() === 'Print') {
                GraphDetailsContent.hide();
                AMO.UI.CurrentPopupBox = null;
                if (dataType === 'TOCA') {
                    AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO.Graph.PrintPlot();
                } else {
                    // SSC
                    AMO.UI.GraphIFrameControlSSC.get(0).contentWindow.AMO.Graph.PrintPlot();
                }

                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:PLOT_PRINT');
            }
            
            AMO.UI.StopPropagation(event);
        });

        //TODO: CLEANUP
        $('.show-graph-dialog').on('touchclick', function () {
            AMO.UI.ShowGraphDialog();
        });

        //TODO: CLEANUP
        $('.hide-graph-dialog').on('touchclick', function () {
            AMO.UI.HideGraphDialog();
        });
        $('.combo-box').on('touchclick', function (event) {
            var t = $(this);
            AMO.UI.StopPropagation(event);

            //if (AMO.UI.CurrentClickedElement != null && AMO.UI.CurrentClickedElement.data() != t.data()) {
            //    // AMO.UI.CurrentClickedElement.click();
            //    AMO.UI.CurrentClickedElement.trigger('touchclick');
            //    AMO.UI.CurrentClickedElement = null;
            //}
            //if (AMO.UI.CurrentPopupBox != null) {
            //    AMO.UI.CurrentPopupBox.hide();
            //    AMO.UI.CurrentPopupBox = null;
            //}
            //if (AMO.UI.GraphIFrameControl != null && typeof AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO != 'undefined') {
            //    AMO.UI.GraphIFrameControl.get(0).contentWindow.AMO.Graph.HideSelectionList();
            //}

            var containerId = t.attr('data-container-id');
            if (containerId.length > 0) {
                var container = $('#' + containerId);
                var visible = container.is(':visible');
                var comboBoxText = t.find('span.text');
                var arrowText = t.find('span.arrow-text');

                AMO.UI.CloseAllDropDownsAndPopups(t, container);
                AMO.UI.CloseGraphSelectionStateList();

                if (visible == true) {
                    arrowText.text("▼");
                    container.hide();
                    AMO.UI.CurrentPopupBox = null;
                    AMO.UI.CurrentClickedElement = null;
                } else {
                    arrowText.text("▲");
                    container.show();
                    AMO.UI.CurrentPopupBox = container;
                    AMO.UI.CurrentClickedElement = t;
                }

                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay('DROP-DOWN-LIST:' + AMO.Utils.StringReplaceSpaceWithUnderscore(comboBoxText.text(), true), comboBoxText.text());
            }
            // AMO.UI.StopPropagation(event);
        });
        $('.toggle-panel').on('touchclick', function (event) {
            var t = $(this);

            AMO.UI.PreventDefault(event);

            var containerId = t.attr('data-container-id');
            var buttonShowText = t.attr('data-button-show-text');
            var buttonHideText = t.attr('data-button-hide-text');
            var linkOrButtonText = t.attr('data-text-label'); // t.text();
            if (typeof linkOrButtonText === 'undefined') {
                linkOrButtonText = t.text();
            }
            var container = $('#' + containerId);
            var visible = container.is(':visible');

            if (containerId.length > 0) {

                AMO.UI.CloseAllDropDownsAndPopups(t, container);
                AMO.UI.CloseGraphSelectionStateList();

                if (container.length > 0) {
                    if (visible == true) {
                        if (typeof buttonShowText != 'undefined') {
                            t.text(buttonShowText);
                        }
                        container.hide();
                        AMO.UI.CurrentPopupBox = null;
                    } else {
                        if (typeof buttonHideText != 'undefined') {
                            t.text(buttonHideText);
                        }
                        container.show();
                        // custom code for a specific panel
                        if (containerId == 'divTOCATabHelpPanelContent') {
                            container.find('.help-container').parent().scrollTop(0);
                        }
                        AMO.UI.CurrentPopupBox = container;
                    }
                    // Log user activity...
                    AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(linkOrButtonText, true), (visible === true ? "Close" : "Open"));
                }
            }
            AMO.UI.StopPropagation(event);
        });

        // TODO: CLEANUP
        $('.lnkDialog').on('touchclick', function () {
            var t = $(this);

            var dataDialogTitle = t.attr('data-dialog-title');
            var dataDialogSubTitle = t.attr('data-dialog-sub-title');

            //title, subtitle, width, height, placeHolderId, okayHandler, displayButtonLinks
            me.ShowDialog2(dataDialogTitle, dataDialogSubTitle, 700, 450, null, null, false);
            return false;
        });

        $('.image-indicator').on('touchclick', function () {
            var t = $(this);
            var dataMode = t.attr('data-mode');
            if (dataMode == '1') {
                t.attr('data-mode', '0');
                t.attr('src', 'images/amo_fault_indicator_0.png');
            } else {
                t.attr('data-mode', '1');
                t.attr('src', 'images/amo_fault_indicator_1.png');
            }

            var key = '';
            $('.image-indicator').each(function () {
                var t2 = $(this);
                key += t2.attr('data-mode');
            });
            if (key != '') {
                if (AMO.UI.SuppressHashUpdate == false) {
                    var hash = GetLocationHash();
                    if (hash) {
                        var aTemp = hash.split('|');
                        if (aTemp.length > 2) {
                            aTemp.splice(aTemp.length - 1, 1);
                            var newHash = aTemp.join('|');
                        } else {
                            newHash = hash;
                        }

                    }
                    AMO.UI.SetAppHashRoute(newHash + '|' + key, true);
                }
            }
            // me.LoadFaultIndicator();
            me.LoadFaultIndicator(key, false);
        });
        $('.search-box-clear').on('touchclick', function () {
            var t = $(this);
            t.find('img:first').hide();

            AMO.UI.ClearGlobalSearch();

            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('TEXT-BOX:SEARCH_BOX', 'Clear search');
        });

        $('area').on('touchclick', function () {

            var initScrollTopValue = $(document).scrollTop();

            var t = $(this);
            var componentId = t.attr('data-component-id');
            var title = t.attr('alt');

            // var url = "../static_contents/tocacomponents/_placeholder.htm";
            var url = AMO.Paths.RelativeStaticTocaComponentsPath + '_placeholder.htm';

            if (typeof componentId === 'undefined' || componentId == '0') {
                url = AMO.Paths.RelativeStaticTocaComponentsPath + '_placeholder.htm';
            } else {
                url = AMO.Data.GetComponentUrl(componentId);
                if (url.length == 0) {
                    url = AMO.Paths.RelativeStaticTocaComponentsPath + '_placeholder.htm';
                }
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('AREA-MAP-LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(title, true));

            // convert to no cache url
            url = AMO.Utils.GetNoCacheUrl(url);

            var parentContainerId = t.parents('.component-container').first().attr('id');

            // alert('area - ' + AMO.UI.SuppressHashUpdate);
            if (AMO.UI.SuppressHashUpdate == false) {
                //AMO.UI.SetAppHashRoute(AMO.Model.selectedToolMenuId() + '|' + AMO.Model.selectedTocaTabId(), true);

                var hash = GetLocationHash();
                if (hash) {
                    var aTemp = hash.split('|');
                    if (aTemp.length > 3) {
                        // remove the last...
                        var temp = [];
                        temp.push(aTemp[0]);
                        temp.push(aTemp[1]);
                        temp.push(aTemp[2]);
                        //aTemp.splice(aTemp.length - 1, 1);
                        temp.push(t.index());
                        var newHash = temp.join('|');
                        if (AMO.UI.SuppressHashUpdate == false) {
                            AMO.UI.SetAppHashRoute(newHash, true);
                        }
                    } else {
                        AMO.UI.SetAppHashRoute(hash + '|' + t.index(), true);
                    }
                }
            }

            // load first the HTML file
            // $(document).scrollTop(0);
            $('#divTocaComponentDetail').hide();
            $('#divTocaComponentDetail').load(url, function () {
                var t = $(this);

                var topBar = $('#' + parentContainerId + ' .top-bar:first');

                topBar.hide();
                // slide left and hide the parent container
                $('#' + parentContainerId).hide("slide", { direction: "left" }, 500, function () {
                    // $(document).scrollTop(0);
                    AMO.UI.ScrollTop(0);

                    // slide right and show detail
                    //$('#divTocaComponentDetail').show("slide", { direction: "right" }, 500, function () {
                    $('#divTocaComponentDetail').show("fade", {}, 500, function () {

                        topBar.show('fade', {}, 100);

                        //t.find('#divKeywordSearch').html('<h2>References:</h2><p>' + title + '</p>');
                        AMO.TOCA.SearchReferencesByContext(title.split(' '), componentId, t.find('#divKeywordSearch'));

                        var leftContent = $('#divTocaComponentDetail .content-left-panel .box-content-scrollable');
                        var rightContent = $('#divTocaComponentDetail .content-right-panel .box-content-scrollable');

                        if (leftContent.height() > rightContent.height()) {
                            var h = leftContent.height();
                            //leftContent.css('height', h + 'px');
                            rightContent.css('height', h + 'px');
                        }

                        // TODO: in order to eanble this, i need to change a lot of things, comment for now... enable zoom...
                        if (AMO.UI.IsImageZoomable('divTocaComponentDetail')) {
                            AMO.UI.EnableImageZoom($('#divTocaComponentDetail .image-detail-container img'));
                        }

                    });

                    $('#divTocaComponentDetailBackButton').on('touchclick', function () {

                        AMO.UI.ClearImageZoom();

                        var hash = GetLocationHash();
                        if (hash) {
                            var aTemp = hash.split('|');
                            if (aTemp.length > 2) {
                                // remove the last...
                                aTemp.splice(aTemp.length - 1, 1);
                                var newHash = aTemp.join('|');
                                if (AMO.UI.SuppressHashUpdate == false) {
                                    AMO.UI.SetAppHashRoute(newHash, true);
                                }
                            }
                        }

                        //$('#divTocaComponentDetail').hide("slide", { direction: "right" }, 500, function () {
                        topBar.hide();
                        $('#divTocaComponentDetail').hide("fade", {}, 500, function () {

                            // slide left and show the parent container
                            $('#' + parentContainerId).show("slide", { direction: "left" }, 500, function () {
                                topBar.show('fade', {}, 100);
                                // the following line will generate context help list
                                // AMO.Model.generateTocaComponentsContextHelp();
                            });
                            $(document).scrollTop(initScrollTopValue);
                        });
                    });

                });


            });
        });

        // Initialize QTips...
        AMO.UI.InitializeQTip();
        AMO.UI.InitializeCrewNoteQTip();

        $('#FeedbackText').val('');
        $SearchBoxText.val('');

        //$('#divFindPrevNextPanel div:first').hide('slide', { direction: 'up' }, 500, function () {
        //    $('#divFindPrevNextPanel').hide();
        //    $('#divFindPrevNextPanel td.text-search').text('');
        //});

        // for non-ipad specific...
        if (me.IsIpad === true) {
            $('[data-no-ipad]').hide();
        }

        // initially set the scrolltop to 0
        AMO.UI.ScrollTop(0);
        AMO.UI.WindowScrollTopValue = 0;

        // resize content main
        resizeContentMain(me);

        // show orientation message...
        me.ShowOrientationMessage();

    };

    var closeGraphSelectionStateList = function () {
        var me = this;
        // inside the iFrame...
        if (me.GraphIFrameControl != null && typeof me.GraphIFrameControl.get(0).contentWindow.AMO != 'undefined') {
            if (me.GraphIFrameControl.get(0).contentWindow.AMO.Graph.IsSelectionListVisible() === true) {
                me.GraphIFrameControl.get(0).contentWindow.AMO.Graph.HideSelectionList();
                logged = true;
                // Log user activity...
                AMO.Utils.SetUserActivityLogAutoDelay('CHART:SELECTION_LIST_CLOSE');
            }
        }

    };

    var closeAllDropDownsAndPopups = function ($currentClickedElement, $container) {
        var me = this;
        var logged = false;

        var divTocaRunList = $('#divTocaRunList');
        if (divTocaRunList.is(':visible') === true) {
            divTocaRunList.hide();
            var divTocaRunDropDownDivFirst = $('#divTocaRunDropDown div:first');
            divTocaRunDropDownDivFirst.removeClass('no-bottom-border');
            divTocaRunDropDownDivFirst.find('.arrow-text').text('▼');
            if (me.CurrentClickedElement != null) {
                if (divTocaRunDropDownDivFirst.data() == me.CurrentClickedElement.data()) {
                    me.CurrentClickedElement = null;
                }
            }
            logged = true;
            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('POPUP-BOX:TOCA_SAMPLE_LIST_CLOSE');
        }

        var divSscList = $('#divSscList');
        if (divSscList.is(':visible') === true) {
            divSscList.hide();
            var divSscDropDownDivFirst = $('#divSscDropDown div:first');
            divSscDropDownDivFirst.removeClass('no-bottom-border');
            divSscDropDownDivFirst.find('.arrow-text').text('▼');
            if (me.CurrentClickedElement != null) {
                if (divSscDropDownDivFirst.data() == me.CurrentClickedElement.data()) {
                    me.CurrentClickedElement = null;
                }
            }
            logged = true;
            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('POPUP-BOX:SSC_LIST_CLOSE');
        }

        if (me.CurrentClickedElement != null &&
            (typeof $currentClickedElement === 'undefined' || $currentClickedElement === null || me.CurrentClickedElement.data() !== $currentClickedElement.data())) {
            var tempText = AMO.UI.CurrentClickedElement.text();

            me.CurrentClickedElement.trigger('touchclick'); // .click();
            me.CurrentClickedElement = null;
            logged = true;
            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay('LINK:BUTTON:' + AMO.Utils.StringReplaceSpaceWithUnderscore(tempText, true));
        }
        // -------------------------------------------------------------------------------

        if (me.CurrentPopupBox != null && (typeof $container === 'undefined' || $container === null || me.CurrentPopupBox.data() != $container.data())) {
            var idElement = me.CurrentPopupBox.attr('id');
            
            me.CurrentPopupBox.hide();
            me.CurrentPopupBox = null;

            if (typeof idElement != 'undefined' && idElement != null) {
                idElement = idElement.toUpperCase();
                if (idElement.substr(0, 3) === 'DIV') {
                    idElement = idElement.substr(3);
                }
                idElement = 'POPUP-BOX:' + idElement + '_CLOSE'
            } else {
                idElement = 'POPUP-BOX:CLOSE';
            }
            logged = true;
            // Log user activity...
            AMO.Utils.SetUserActivityLogAutoDelay(idElement);
        }

        // and all qTips as well
        if ($('div.qtip:visible').length > 0) {
            logged = true;
            $('div.qtip:visible').qtip('hide');
        }

        // TODO: investigate...
        if (logged === false) {
            // Log user activity...
            // AMO.Utils.SetUserActivityLogAuto('PAGE CLICK_OR_TAP');
        }
    };

    var initializeQTip = function () {
        var excludeOptions = [];
        excludeOptions.push('not([url])');
        excludeOptions.push('not([data-suppress-tooltip])');
        excludeOptions.push('not([data-load-fault-indicator])');
        excludeOptions.push('not([data-goto])');
        excludeOptions.push('not([data-popup])');
        excludeOptions.push('not([data-schematic-id])');
        excludeOptions.push('not([data-crew-note])');
        excludeOptions.push('not([data-procedure-id])');
        excludeOptions.push('not([data-ssc-procedure-id])');
        excludeOptions.push('not(.toggle-panel)');

        var excludeLinkOptions = 'a[href*="void"]:' + excludeOptions.join(':') + ', a[href="#"]:' + excludeOptions.join(':');

        // $(document).on('touchclick', 'a[href*="void"]:not([url]):not([data-suppress-tooltip]):not([data-load-fault-indicator]):not([data-goto]):not([data-popup]):not([data-schematic-id]):not([data-crew-note]),  a[href="#"]:not([url]):not([data-suppress-tooltip]):not([url]):not([data-load-fault-indicator]):not([data-goto]):not([data-popup]):not([data-schematic-id]):not([data-crew-note])', function (event) {
        $(document).on('click', excludeLinkOptions, function (event) {

            AMO.UI.PreventDefault(event);
       
            var t = $(this);
            var text = $.trim(t.text());
            var url = AMO.Data.GetGlossaryUrl(text);
            var urlContent = '';

            // -------------------- TODO: need to disable for now as there's issue with iFrame (ie. in CHARTS running inside iFrame)
            var textHtmlTitle = $('<a style="color:#ffffff; text-transform:capitalize; font-size:10pt; text-decoration:none; border-bottom:1px solid #ffffff;" title="Click to view in fullscreen" class="show-full-screen" href="javascript:void(0)"></a>').text(text).attr('url', url).wrap('<span />').parent().html();
            if (window.frameElement != null) {
                textHtmlTitle = text;
            }

            if (url.length == 0) {
                t.qtip($.extend({}, sharedQTipConfig, {
                    content: {
                        text: '<div style="color:#fff; padding:10px;">Info not available! Please check "glossary.json"</div>',
                        title: {
                            text: text,
                            button: true
                        }
                    },
                    position: {
                        my: 'bottom right',
                        at: 'top left',
                        viewport: $(window)  // false, $(window) keep the tooltip on-screen at all times
                    },
                    show: {
                        event: event.type, // Use the same show event as the one that triggered the event handler
                        solo: true,
                        ready: true  // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                    },
                    hide: {
                        event: 'unfocus'
                    },
                    events: {
                        hide: function (event, api) {
                            AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_TOOLTIP', 'Close Tooltip');
                        }
                    },
                    style: {
                        tip: true, // Apply a speech bubble tip to the tooltip at the designated tooltip corner
                        border: {
                            width: 0,
                            radius: 4
                        },
                        name: 'dark', // 'cream, dark, green, light, red, blue'Use the default light style
                        classes: 'qtip-shadow qtip-jtools qtip-custom-size' // 'red', 'blue', 'dark', 'light', 'green', 'jtools', 'plain', 'youtube', 'cluetip', 'tipsy', 'tipped', 'bootstrap'
                    },
                    overwrite: false // Make sure the tooltip won't be overridden once created
                }), event);
            } else {

                $('<div class="qtip-custom-content-container" />').load(url, function () {

                    // resize the image inside the image-container...
                    // removes the header...
                    $(this).find('.title-header').remove();

                    // replace all links with a span
                    $(this).find('a').each(function () {
                        var t2 = $(this);
                        t2.replaceWith('<span>' + t2.text() + '</span>');
                    });

                    var topBar = $(this).find('.component-detail-top-bar-static-flex');
                    if ($.trim(topBar.text()) == '') {
                        $(this).find('.component-detail-top-bar-static, .component-detail-top-bar-static-flex, .component-detail-top-bar-static-spacer').hide();
                    }

                    urlContent = $(this).wrap('<p/>').parent().html();

                    t.qtip($.extend({}, sharedQTipConfig, {
                        content: {
                            text: urlContent, 
                            title: {
                                text: textHtmlTitle,
                                button: true
                            }
                        },
                        position: {
                            my: 'center', //my: 'bottom right',
                            at: 'center', //at: 'top left',
                            target: $(window), //viewport: $(window),  // false, $(window) keep the tooltip on-screen at all times
                            adjust: { screen: true }
                        },
                        show: {
                            event: event.type, //'click',
                            solo: true,
                            ready: true
                        },
                        hide: {
                            event: 'unfocus'
                        },
                        events: {
                            hide: function (event, api) {
                                AMO.Utils.SetUserActivityLogAuto('BUTTON:CLOSE_TOOLTIP', 'Close Tooltip');
                            }
                        },
                        style: {
                            tip: true, // Apply a speech bubble tip to the tooltip at the designated tooltip corner
                            border: {
                                width: 0,
                                radius: 4
                            },
                            name: 'dark', // 'cream, dark, green, light, red, blue'Use the default light style
                            // width: 900, // Set the tooltip width
                            classes: 'qtip-shadow qtip-jtools qtip-custom-size' // 'red', 'blue', 'dark', 'light', 'green', 'jtools', 'plain', 'youtube', 'cluetip', 'tipsy', 'tipped', 'bootstrap'
                        },
                        overwrite: false
                    }), event);
                });
            }

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:' + AMO.Utils.StringReplaceSpaceWithUnderscore(text, true), 'Tooltip Glossary > ' + text + ' [' + url + ']' );

            AMO.UI.StopPropagation(event);
        });
    };

    var getSelectedTask = function (taskIndex, taskId, dueDate, priority) {
        var found = false;
        var task = null;

        for (var idx = 0; idx < AMO.Model.tocaCurrentWeekSchedule().length; idx++) {
            var t = AMO.Model.tocaCurrentWeekSchedule()[idx];
            if (t.procedure == taskId && t.due_date == dueDate && t.priority == priority && idx == taskIndex) {
                task = AMO.Model.tocaCurrentWeekSchedule()[idx];
                found = true;
                break;
            }
        }

        if (found == false) {
            for (var idx = 0; idx < AMO.Model.tocaNextWeekSchedule().length; idx++) {
                var t = AMO.Model.tocaNextWeekSchedule()[idx];
                if (t.procedure == taskId && t.due_date == dueDate && t.priority == priority && idx == taskIndex) {
                    task = AMO.Model.tocaNextWeekSchedule()[idx];
                    found = true;
                    break;
                }
            }
        }
        if (found == false) {
            for (var idx = 0; idx < AMO.Model.tocaFutureWeekSchedule().length; idx++) {
                var t = AMO.Model.tocaFutureWeekSchedule()[idx];
                if (t.procedure == taskId && t.due_date == dueDate && t.priority == priority && idx == taskIndex) {
                    task = AMO.Model.tocaFutureWeekSchedule()[idx];
                    found = true;
                    break;
                }
            }
        }

        return task;
    };

    var initializeCrewNoteQTip = function () {
        $(document).on('touchclick', 'img[data-crew-note]', function (event) {

            event.preventDefault();

            var t = $(this);
            var taskUUID = t.attr('data-uuid');
            var taskId = t.attr('data-task-id');
            var dueDate = t.attr('data-task-due');
            var priority = t.attr('data-priority');
            var taskIndex = t.attr('data-index');

            _currentTask = getSelectedTask(taskIndex, taskId, dueDate, priority);

            if (_currentTask == null) return;

            var divCrewNoteEditorClientID = 'divCrewNoteEditor_' + taskId + '_' + dueDate.replace(':','_') + '_' + taskIndex;

            var text = _currentTask.crew_note();
            var tooltipTitle = text.length == 0 ? 'Enter Crew Note' : 'Edit Crew Note';

            var htmlContent = [];
            htmlContent.push('<div class="crew-note-editor" id="' + divCrewNoteEditorClientID + '">');
            htmlContent.push('<textarea maxlength="1000"></textarea>');
            htmlContent.push('<br />');

            htmlContent.push('<div class="note-error">');
            htmlContent.push('Unable to update crew note.');
            htmlContent.push('</div>');

            htmlContent.push('<div class="action-buttons">');
            htmlContent.push('<input class="crew-note-button update" type="button" value="Update" />');
            htmlContent.push('<input class="crew-note-button cancel" type="button" value="Cancel" />');
            htmlContent.push('</div>');
            htmlContent.push('<br class="clear">');
            htmlContent.push('</div>');

            var htmlC = $('<div />').html(htmlContent.join(''));
            htmlC.find('textarea').text(text);

            $(document).on('touchclick', '.crew-note-button', function () {

                event.preventDefault();
                AMO.UI.StopPropagation(event);

                var oldScrollTop = $(window).scrollTop();

                var t2 = $(this);
                if (t2.hasClass('update')) {
                    var errorPanel = t2.parent().siblings('.note-error');
                    var newNote = $.trim(t2.parent().siblings('textarea').val());

                    errorPanel.hide();

                    var taskParam = {
                        'uuid': taskUUID,
                        'crew_note': newNote
                    };

                    // call Scheduler's API to update crew note
                    AMO.TOCA.UpdateTaskCrewNote(taskParam, function (data) {
                        if (typeof data == 'string') {
                            // means error....
                            errorPanel.show();
                            AMO.Utils.WriteConsole(data);
                            AMO.UI.AlertBox("Unable to update crew note!");
                        } else {
                            // no error...
                            if (_currentTask != null) {
                                _currentTask.crew_note(newNote);
                            }
                            $(document).off('touchclick', '.crew-note-button');

                            // Log user activity...
                            AMO.Utils.SetUserActivityLogAuto('BUTTON:Update:EditCrewNote', newNote);
                        }
                        _qTipAPI.hide();
                    });
                } else if (t2.hasClass('cancel')) {
                    $(document).off('touchclick', '.crew-note-button');
                    // Log user activity...
                    AMO.Utils.SetUserActivityLogAuto('BUTTON:Cancel:EditCrewNote');
                    _qTipAPI.hide();
                }
                AMO.UI.ScrollTop(oldScrollTop + 1, 1000);
                window.setTimeout(function () {
                    AMO.UI.ScrollTop(oldScrollTop, 1000);
                }, 500);
            });

            t.qtip($.extend({}, sharedQTipConfig, {
                content: {
                    text: htmlC.html(),
                    title: {
                        text: tooltipTitle,
                        button: true
                    }
                },
                position: {
                    my: 'bottom right',
                    at: 'top left',
                    viewport: $(window)  // false, $(window) keep the tooltip on-screen at all times
                },
                show: {
                    event: event.type, // Use the same show event as the one that triggered the event handler
                    solo: true,
                    ready: true  // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                },
                hide: {
                    event: 'unfocus'
                },
                style: {
                    tip: true, // Apply a speech bubble tip to the tooltip at the designated tooltip corner
                    border: {
                        width: 0,
                        radius: 4
                    },
                    name: 'dark', // 'cream, dark, green, light, red, blue'Use the default light style
                    // width: 900, // Set the tooltip width
                    classes: 'qtip-shadow qtip-jtools qtip-custom-size' // 'red', 'blue', 'dark', 'light', 'green', 'jtools', 'plain', 'youtube', 'cluetip', 'tipsy', 'tipped', 'bootstrap'
                },
                events: {
                    hide: function(event, api) {
                        AMO.MonitorScheduleHalt = false;
                        $(this).qtip('destroy');

                        //if (AMO.GenericTimerId != null) {
                        //    window.clearTimeout(AMO.GenericTimerId);
                        //}
                        //AMO.GenericTimerId = window.setTimeout(function () {
                            AMO.Utils.SetUserActivityLogAutoDelay('BUTTON:CREW_NOTE_TOOLTIP_CLOSE', 'Close Crew Note Tooltip');
                        //}, 1000);
                        
                    }
                },
                overwrite: false // Make sure the tooltip won't be overridden once created
            }), event);

            _qTipAPI = t.qtip('api');

            AMO.MonitorScheduleHalt = true;

            // Log user activity...
            AMO.Utils.SetUserActivityLogAuto('LINK:EditCrewNote' , 'Edit Crew Note');

            AMO.UI.StopPropagation(event);
        });
    };

    var initializeCrewNote = function () {
        $('#divTocaTabTasks div.crew-note-container').each(function () {
            var t = $(this);
            var content = t.find('.crew-note-content');
            var flag = t.next('.crew-note-more-flag');
            if (t.height() + 2 >= content.height()) {
                flag.hide();
            } else {
                flag.show();
            }

            var crewNoteContainerId = t.attr('data-crew-note-container-id');
            var h = _crewNoteContainerIds[crewNoteContainerId];
            if (typeof h != 'undefined' && h != null) {
                t.css('height', 'auto');
                flag.find('span').text('[less]');
                flag.show();
            }
        });
    };

    var blockPage = function () {
        $('#divBlockPage').show();
    };

    var unBlockPage = function () {
        if ($('#divBlockPage').is(':visible')) {
            window.setTimeout(function () { $('#divBlockPage').hide(); }, 1000);
        }
    };

    var showTaskHistoryDialog = function () {

        $('#divTaskHistoryDialogBlock').show();

        var divTaskHistoryDialog = $('#divTaskHistoryDialog');
        divTaskHistoryDialog.centerFixedCoor();
        divTaskHistoryDialog.show('fade', {}, 500);

    };

    var showDialogBox = function (dialogId) {
        var $dialog = $('#' + dialogId);
        var $dialogBlocker = $('#' + dialogId + 'Block');

        $dialogBlocker.show();

        $dialog.centerFixedCoor();
        $dialog.show('fade', {}, 500);
    };

    var hideDialogBox = function (dialogId) {
        var $dialog = $('#' + dialogId);
        var $dialogBlocker = $('#' + dialogId + 'Block');

        $dialog.hide('fade', {}, 500, function () {
            $dialogBlocker.hide('fade', {}, 100);
        });
    };

    var showAddATaskDialog = function () {
        var me = this;

        var oldScrollTop = $(window).scrollTop();

        if (AMO.UI.IsIpad == true) {
            me.BlockPage();
        }

        function validateTask() {
            var newTask = null;

            var errors = [];
            var errorElement = $('#divAddATaskValidationErrorMessage');
            var errorContent = $('#divAddATaskValidationErrorMessage div:first');

            var weekSelected = $("#divAddATaskDialog input:checkbox[name='when']:checked");
            var when = '';
            if (weekSelected.length == 0) {
                errors.push("Please select the week to schedule!");
            } else {
                when = weekSelected.first().val();
            }

            var crewNote = $('#txtCrewNotes').val();

            errorElement.hide();
            errorContent.empty();

            if ($("#divAddATaskDialog input:radio[name='procedure_name']:checked").length == 0) {
                errors.push("Please select a procedure!");
            }

            var selectedProcedureId = $("#divAddATaskDialog input:radio[name='procedure_name']:checked").first().val();

            if (errors.length > 0) {
                var h = [];
                h.push('<ul>');
                for (var key in errors) {
                    h.push('<li>' + errors[key] + '</li>');
                }
                h.push('</ul>');
                errorContent.html(h.join(''));
                errorElement.show();

                if (AMO.UI.IsIpad == true) {
                    AMO.UI.ScrollTop(oldScrollTop + 1, 1000);
                    window.setTimeout(function () {
                        AMO.UI.ScrollTop(oldScrollTop, 1000);
                    }, 500);
                }
                newTask = null;
            } else {
                newTask = {
                    "when": when,
                    "id": selectedProcedureId,
                    "crew_note": crewNote
                };
            }
            return newTask;
        }

        function addTask(newTask, cb) {
            //var errors = [];
            var errorElement = $('#divAddATaskValidationErrorMessage');
            var errorContent = $('#divAddATaskValidationErrorMessage div:first');

            // call Scheduler's API to add new task
            AMO.TOCA.AddTask(newTask, function (data) {
                // do nothing for now...
                if (typeof data == 'string') {
                    // means error....
                    errorContent.html(data);
                    errorElement.show();
                    cb(false);
                } else {
                    cb(true);
                }
            });
        };

        var actionButtons = {
            'Add': function (e) {
                var button = $(e.currentTarget);
                if (button.hasClass('button-disable')) {
                    return;
                }

                // Log user activity
                AMO.Utils.SetUserActivityLogAuto('BUTTON:Add', 'Add A Task Dialog');

                var newTask = validateTask();
                if (newTask != null) {
                    button.disableMe();
                    addTask(newTask, function (result) {
                        if (result == true) {
                            // no error
                        } else {
                            // error...

                        }
                        window.setTimeout(function () {
                            // clear form...
                            $('#divAddATaskDialog input:radio').prop('checked', false);
                            $('#divAddATaskDialog input:checkbox[name="when"]').prop('checked', false);
                            $('#txtCrewNotes').val('');
                            button.enableMe();
                        }, 500);
                    });
                } else {
                    button.enableMe();
                }
            },
            'Add & Close': function (e) {
                var button = $(e.currentTarget);
                if (button.hasClass('button-disable')) {
                    return;
                }
                // Log user activity
                AMO.Utils.SetUserActivityLogAuto('BUTTON:Add & Close', 'Add A Task Dialog');

                var newTask = validateTask();
                if (newTask != null) {
                    button.disableMe();
                    addTask(newTask, function (result) {
                        if (result == true) {
                            // no error
                            AMO.MonitorScheduleHalt = false;
                            $.unblockUI();
                        } else {
                            // error...
                        }
                        if (AMO.UI.IsIpad == true) {
                            AMO.UI.ScrollTop(oldScrollTop + 1, 1000);
                            window.setTimeout(function () {
                                AMO.UI.ScrollTop(oldScrollTop, 1000);
                                me.UnBlockPage();
                            }, 500);
                        }
                        button.enableMe();
                    });
                } else {
                    button.enableMe();
                }
            },
            'Cancel': function () {
                AMO.MonitorScheduleHalt = false;
                $.unblockUI();
                if (AMO.UI.IsIpad == true) {
                    AMO.UI.ScrollTop(oldScrollTop + 1, 1000);
                    window.setTimeout(function () {
                        AMO.UI.ScrollTop(oldScrollTop, 1000);
                        me.UnBlockPage();
                    }, 500);
                }
                // Log user activity
                AMO.Utils.SetUserActivityLogAuto('BUTTON:Cancel', 'Add A Task Dialog');
            }
        };
 
        if (me.AddATaskContainerHTML == null) {

            me.AddATaskContainerHTML = '<div id="divAddATaskContainer">' + $('#divAddATaskContainer').html() + '</div>';
            $('#divAddATaskContainer').remove();
        }

        var dialogOpts = $.extend({},
                                  sharedDialogConfig,
                                  {
                                      title: 'Add A Task',
                                      subtitle: '',
                                      ownhtml: me.AddATaskContainerHTML,
                                      css: {
                                          width: '800px', height: '600px', top: '15%',
                                          padding: '10px 25px 0 25px'
                                      },
                                      classSubtitle: {'display': 'none' },
                                      classInfo: { 'display': 'none' },
                                      buttons: actionButtons,
                                      displayButtons: true,
                                      displayButtonLinks: false
                                  });


        me.ShowDialog(dialogOpts);

        $('#txtCrewNotes').on('keydown', function () {
            $('#divAddATaskValidationErrorMessage').hide();
        }).on('click', function (event) {
            AMO.UI.StopPropagation(event);
        });

        AMO.MonitorScheduleHalt = true;

    };

    var crossBrowserSpecificLogic = function () {
        //// -----------------------------------------------------------
        //// BROWSER detection/specific logic...
        ////alert('webkit:' + $.browser.webkit);
        ////alert('safari:' + $.browser.safari);
        ////alert('opera:' + $.browser.opera);
        ////alert('msie:' + $.browser.msie);
        ////alert('mozilla:' + $.browser.mozilla);
        //var tabsLight = $('#divTocaTabComponent ul.tabs-light.cross-browser-adjust');
        //if ($.browser.mozilla) {
        //    tabsLight.css('margin-left', '50px');
        //} else if ($.browser.safari) {
        //    tabsLight.css('margin-left', '-25px');
        //} else if ($.browser.webkit) {
        //    tabsLight.css('margin-left', '70px');
        //}
        //// ------------------------------------------------------------------------------

    };

    var flowControl = function (funcArr, funcDone) {
        function proceed(i) {
            if (i < funcArr.length) {
                return function () {
                    funcArr[i](proceed(i + 1));
                }
            } else {
                return funcDone;
            }
        }
        proceed(0)();
    };

    var resize = function () {
        var self = this;

        // Resize graphDialog
        resizeGraphDialog(self);

        resizeFullscreenDialog(self);

        // Resize content-main
        resizeContentMain(self);
    };

    var refreshPage = function () {
        // window.location = window.location.href;
        window.location.reload(true);
    };

    var alertBox = function (message, debugInfo, okayHandler, title, subtitle) {
        if (typeof title === 'undefined') title = 'Error';
        if (typeof subtitle === 'undefined') subtitle = '';

        var okay = function () {
            if (typeof okayHandler != 'undefined') {
                okayHandler();
            }
            $.unblockUI();
        };

        var msg = $('<span />').html(message);
        msg.attr('title', debugInfo);
        msg = $('<p />').append(msg).html();

        var options = {
            title: title,
            subtitle: subtitle,
            ownhtml: msg,
            css: { width: '350px', height: '170px', top: '25%' },
            buttons: { 'Ok': okay },
            displayButtons: true
        };

        this.ShowDialog(options);
    };

    var hideDialog = function (logit) {
        if (typeof logit === 'undefined') logit = true;
        if (logit === true) {
            var hash = GetLocationHash();
            if (hash) {
                hash = AMO.Utils.StringReplace(hash, '|DIALOG', '');
                AMO.UI.SetAppHashRoute(hash, true);
            }
        }
        $.unblockUI();
    };

    var showDialog = function (options) {
        var opts = $.extend({}, {
            title: 'Title Here',
            subtitle: 'Subtitle here..',
            ownhtml: '',
            css: { width: '400px', height: '250px', top: '25%' },
            classInfo: { 'display': 'none' },
            displayButtons: true,
            displayButtonLinks: false
        }, options);

        if (AMO.UI.SuppressHashUpdate == false) {
            if (typeof GetLocationHash === 'function') {
                var hash = GetLocationHash();
                if (AMO.Utils.StringContains(hash, '|DIALOG') == false) {
                    AMO.UI.SetAppHashRoute(hash + '|DIALOG', true);
                }
            }
        }

        $.amoDialog(opts);
    };

    var showDialog2 = function (title, subtitle, width, height, placeHolderId, okayHandler, displayButtonLinks) {
        if (typeof displayButtonLinks == 'undefined') {
            displayButtonLinks = true;
        }

        var okay = function () {
            if (typeof okayHandler != 'undefined'){
                okayHandler();
            }
            $.unblockUI();
        };

        displayButtonLinks = true;
        var opts = {
            title: title,
            subtitle: subtitle,
            ownhtml: $('#' + placeHolderId).html(),
            css: { width: width + 'px', height: height + 'px', top: '25%' },
            classInfo: { 'display': 'none' },
            displayButtons: true,
            buttons: {'Ok': okay },
            displayButtonLinks: displayButtonLinks,
            links: { 'cancel': function () { }, 'test': function () { }}
        };

        $.amoDialog(opts);
    };

    // TODO: to be deprecated
    var resizeContentMain = function (context) {
        //var height = ($(window).height() - 90);
        // $('.content-main').css({ 'min-height': height + 'px' });
    };

    var resizeGraphDialog = function (context) {
        var graphDialog = $("#graphDialog");
        //if (graphDialog.is(':visible')) {
            var graphs = $('#graphs');
            
            var offsetHeight = 80;
            var offsetWidth = 20;

            var wHeight = ($(window).height() - offsetHeight);
            var graphHeight = ($(window).height() - (offsetHeight + 20));
            var wWidth = ($(window).width() - offsetWidth);
            graphDialog.css({ 'height': wHeight + 'px', 'width': wWidth + 'px', 'top': '65px', 'left': '0px' });
            graphs.css({ 'height': graphHeight + 'px' });


        //graphs.find('.graph-canvas-container').css({'width': (wWidth - 10) + 'px', 'height': (graphHeight - 50) + 'px'});
            graphs.find('.graph-canvas-container').each(function () {
                var t = $(this);
                t.css({ 'width': (wWidth - offsetWidth) + 'px', 'height': (graphHeight - (offsetHeight + 20)) + 'px' });
                //AMO.Utils.WriteConsole($(t).css());
            });
        //}
    };

    var resizeFullscreenDialog = function (context) {
        var fullscreenDialog = $("#fullscreenDialog");
        var pdfControl = $('#pdfControl');
        var videoControl = $('#videoControl');
        var htmlControl = $('#htmlControl');

        var offsetHeight = 20; //80;
        var offsetWidth = 20;

        var wHeight = ($(window).height() - offsetHeight);
        var mediaControlHeight = ($(window).height() - (offsetHeight + 70));
        var wWidth = ($(window).width() - offsetWidth);

        // alert(mediaControlHeight);
        fullscreenDialog.css({ 'height': wHeight + 'px', 'width': wWidth + 'px', 'top': '0px', 'left': '0px' });
        pdfControl.css({ 'height': mediaControlHeight + 'px' });
        videoControl.css({ 'height': mediaControlHeight + 'px' });
        htmlControl.css({ 'height': mediaControlHeight + 'px' });

        if (htmlControl.is(':visible')) {
            var img = htmlControl.find('.image-detail-container > img');
            var text = htmlControl.find('.text-box-content-flex');

            img.css('height', (mediaControlHeight - 80) + 'px');
            text.css('max-height', (mediaControlHeight - 90) + 'px');

            if (AMO.UI.IsImageZoomable('htmlControl')) {
                AMO.UI.EnableImageZoom($('#htmlControl .image-detail-container img'), true);
            }
        }
    };

    var showFullscreenDialog = function (title, url, htmlText) {
        var self = this;
        
        var oldScrollTop = $(window).scrollTop();

        var mediaNotSupported = $('#mediaNotSupported');
        var pdfControl = $('#pdfControl');
        var videoControl = $('#videoControl');
        var htmlControl = $('#htmlControl');

        // -----------------------------------------
        // do some cleanup first...
        AMO.UI.ClearImageZoom();
        // -----------------------------------------

        if (typeof htmlText != 'undefined') {
            htmlControl.html(htmlText);
            return;
        }
        if (typeof url == 'undefined' || url == null) url = "";
        if (url.length == 0) {
            return;
        }
        
        // ---------------------------------------------------
        // some UI cleaning up to do...
        if ($('#divSchematicListContent').is(':visible')) {
            $('#divSchematicComboBox').trigger('touchclick'); //.click();
        }
        // ----------------------------------------------------

        resizeFullscreenDialog(self);

       //  $('body').css('overflow', 'hidden');
        // $('#fullscreenTitle').text(title).attr('href', url);
        $('#fullscreenTitle').text(title);
        $('a.download-file').attr('href', url);

        mediaNotSupported.hide();
        pdfControl.hide();
        videoControl.hide();
        htmlControl.hide();

        // check what type of file/media - pdf?video?
        var u = url.toLowerCase();

        if (u.indexOf('.pdf') != -1) {
            var params = "#toolbar=1&amp;navpanes=1&amp;scrollbar=1&amp;page=1&amp;view=FitH";
            url = url + params;

            pdfControl.show();
            var pdfControl = document.getElementById('pdfControl');
            pdfControl.data = url;
        } else if (u.indexOf('.mp4') != -1) {
            videoControl.attr('poster', 'images/200px-NASA_logo.svg.png');
            videoControl.show();
            //$("#videoControl > source").attr("src", url);
            //$('#videoControl').get(0).load();
            var videoSource = videoControl.find('source');
            if (videoSource.length > 0) {
                videoSource.eq(0).attr("src", url);
            }
            videoControl.get(0).load();

        } else if (u.indexOf('.htm') != -1) {
            // convert to NO CACHE URL
            // url = AMO.Utils.GetNoCacheUrl(url);

            htmlControl.empty();
            htmlControl.show();
            htmlControl.load(url, function () {

                resizeFullscreenDialog(self);

                // done loading...
                if (AMO.UI.IsImageZoomable('htmlControl')) {
                    AMO.UI.EnableImageZoom($('#htmlControl .image-detail-container img'), true);
                }

                $(this).scrollTop(0);
                AMO.UI.ScrollTop(0, 100);

                $('body').addClass('noscroll'); // trac #385
                
            });
        }
        else {
            mediaNotSupported.show();
        }

        
      
        //$.blockUI({
        //    message: $('#fullscreenDialog'),
        //    css: {
        //        width: '100%',
        //        top: '0px',
        //        left: '0px',
        //        border: 'none',
        //        textAlign: 'left',
        //        cursor: 'default',
        //        'z-index': 2000
        //    },
        //    // styles for the overlay, backgroundColor: '#000' , opacity: 0.6
        //    overlayCSS: {
        //        backgroundColor: '#000',
        //        opacity: 0.3,
        //        cursor: 'default'
        //    },
        //});


        var fullscreenDialog = $('#fullscreenDialog');
        fullscreenDialog.attr('data-original-scroll-value', oldScrollTop);

        fullscreenDialog.show('fade', {}, 500, function () {
            AMO.UI.ScrollTop(0, 100);
            if (AMO.UI.IsIpad == false) {
                $('body').addClass('noscroll');
            }
        });
        //$('body').addClass('noscroll');
        //fullscreenDialog.show();

    };

    var showProgress = function (opacity, width) {
        if (typeof opacity === 'undefined' || opacity === null) opacity = 0.1;
        if (typeof width === 'undefined') width = 150;

        $.blockUI({
            message: $divPleaseWait,
            centerY: 0,
            css: { 
                top: '1px', 
                left: '', 
                right: '10px',
                width: width + 'px',
                border: '1px solid #939393',
                padding: '8px',
                '-webkit-border-radius': '8px',
                '-moz-border-radius': '8px',
                'border-radius': '8px'
            },
            overlayCSS: {
                backgroundColor: '#000',
                opacity: opacity,
                cursor: 'wait'
            }
        });

        //css: {
        //        width: '350px',
        //        textAlign: 'left',
        //        height: '220px',
        //        border: '1px solid #939393',
        //        padding: '25px 25px 0 25px',
        //        '-webkit-border-radius': '8px',
        //        '-moz-border-radius': '8px',
        //        'border-radius': '8px',
        //        '-moz-box-shadow':'0px 0px 15px #494949',
        //        '-webkit-box-shadow': '0px 0px 15px #494949',
        //        'box-shadow': '0px 0px 15px #494949',
        //        cursor: 'default'
        //},

        //$.blockUI({
        //    message: $('#divProgress'),
        //    css: {
        //        width: '100%',
        //        height: '100%',
        //        top: '0px',
        //        left: '0px',
        //        border: 'none',
        //        textAlign: 'left',
        //        cursor: 'default'
        //    },
        //    // styles for the overlay, backgroundColor: '#000' , opacity: 0.6
        //    overlayCSS: {
        //        backgroundColor: '#000',
        //        opacity: 0.3,
        //        cursor: 'default'
        //    },
        //});
    };

    var hideProgress = function () {
        $.unblockUI();
    };

    var isImageZoomable = function(containerId) {
        var tabSelected = $('#' + containerId + ' .tabs-light li.selected');
        var zoomable = true;
        if (tabSelected.length == 1) {
            zoomable = (tabSelected.text() != "Close-up");
        }
        return zoomable;
    };

    var hideFullscreenDialog = function () {
        AMO.UI.ClearImageZoom();

        if ($('#divTocaSchematicDetail').is(':visible') && AMO.UI.IsImageZoomable('divTocaSchematicDetail')) {
            AMO.UI.EnableImageZoom($('#divTocaSchematicDetail .image-detail-container img'));
        } else if ($('#divTocaOperationalOverview').is(':visible') && AMO.UI.IsImageZoomable('divTocaOperationalOverview')) {
            AMO.UI.EnableImageZoom($('#divTocaOperationalOverview .image-detail-container img'));
        } else if ($('#divTocaComponentDetail').is(':visible') && AMO.UI.IsImageZoomable('divTocaComponentDetail')) {
            AMO.UI.EnableImageZoom($('#divTocaComponentDetail .image-detail-container img'));
        }
        //$.unblockUI();
        // $('#fullscreenDialog').hide();
        $('body').removeClass('noscroll');
        $('#fullscreenDialog').hide('fade', {}, 500, function () {
            var t = $(this);
            var origScrollValue = t.attr('data-original-scroll-value');
            if (origScrollValue != null) {
                AMO.UI.ScrollTop(origScrollValue, 100);
            }
        });
    };

    var showGraphDialog = function () {
 
        var self = this;

        resizeGraphDialog(self);

        $.blockUI({
            message: $('#graphDialog'),
            css: {
                width: '100%',
                top: '0px',
                left: '0px',
                border: 'none',
                textAlign: 'left',
                cursor: 'default'
            },
            // styles for the overlay, backgroundColor: '#000' , opacity: 0.6
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.3,
                cursor: 'default'
            },
        });
    };

    var hideGraphDialog = function () {
        $.unblockUI();
    };

    var loadFaultIndicator = function (code, logit) {
        var key = '';
        if (typeof logit === 'undefined') logit = true;

        if (typeof code != 'undefined') {
            key = code;
            var arr = code.split('');
            for (var idx = 0; idx < arr.length; idx++) {
                var indicator = $('.image-indicator').eq(idx);
                var src = "images/amo_fault_indicator_" + arr[idx] + ".png"

                indicator.attr('data-mode', arr[idx]);
                indicator.attr('src', src);
            }
        }
        else {
            $('.image-indicator').each(function () {
                var t2 = $(this);
                key += t2.attr('data-mode');
            });
        }
        var faultIndicator = AMO.Data.GetFaultIndicatorByKey(key);

        // since ko.mapping does not work well in my case, do the hard way...
        AMO.Model.currentFaultIndicator.Name(faultIndicator.Name);


        // $('#divFaultIndicatorContent').html('hello');
        var htmlUrl = AMO.Paths.RelativeStaticFaultIndicatorsPath + key + '.htm';

        // convert to NO CACHE URL
        htmlUrl = AMO.Utils.GetNoCacheUrl(htmlUrl);

        $('#divFaultIndicatorContent').load(htmlUrl, function () {

            AMO.UI.ScrollTop(0, 500);

            // alert('Load was performed.');
            $('[data-image-indicator-code]').each(function () {
                var t = $(this);
                var code = t.attr('data-image-indicator-code');
                t.html(AMO.TOCA.GenerateFaultIndicatorImage(code));
            });

            // Log user activity
            if (logit === true) {
                AMO.Utils.SetUserActivityLog(0, 4, -1, 'FAULTCODE_' + key);
            }
        });
    };

    var loadReferenceDetails = function (title, url, index, parentIndex) {
        var divTocaReferenceContainer = $('#divTocaReferenceContainer');
        var divTocaReferenceDetail = $('#divTocaReferenceDetail');
        var divTocaReferenceDetailVideo = $('#divTocaReferenceDetailVideo');

        if (AMO.Utils.StringEmpty(url) === false) {

            divTocaReferenceContainer.hide('fade', {}, 500, function () {

                // pause all videos...
                AMO.UI.PauseAllHelpVideos();

                var hashValue = GetLocationHash();

                if (url.toLowerCase().indexOf('.mp4') != -1) {
                    divTocaReferenceDetail.hide();
                    divTocaReferenceDetailVideo.find('.top-title-bar').remove();
                    divTocaReferenceDetailVideo.find('.top-title-bar-spacer').remove();
                    divTocaReferenceDetailVideo.prepend('<div class="top-title-bar"><div class="back-button-history" data-hash-value="' + hashValue + '"></div><div class="back-button-history-text">' + AMO.Utils.HtmlEncode(title) + '</div><br class="clear" /></div><div class="top-title-bar-spacer"></div>');

                    var n = divTocaReferenceDetailVideo.find('.top-title-bar-spacer').next();
                    n.css('margin', '0 5px 0 5px');

                    divTocaReferenceDetailVideo.show();
                    
                    window.setTimeout(function () {
                        var videoSource = $videoReferenceControl.find('source');
                        if (videoSource.length > 0) {
                            videoSource.eq(0).get(0).src = url;
                            $videoReferenceControl.get(0).load();
                        }
                    }, 500);

                } else {
                    divTocaReferenceDetail.empty();
                    divTocaReferenceDetail.load(url, function () {
                        var t2 = $(this);
                        t2.prepend('<div class="top-title-bar"><div class="back-button-history" data-hash-value="' + hashValue + '"></div><div class="back-button-history-text">' + AMO.Utils.HtmlEncode(title) + '</div><br class="clear" /></div><div class="top-title-bar-spacer"></div>');

                        var n = t2.find('.component-detail-content-flex');
                        var m = '10px 5px 0 5px';
                        if (n.length == 0) {
                            n = t2.find('.top-title-bar-spacer').next();
                            m = '0 5px 0 5px';
                        } else {
                            t2.find('.title-header').hide();
                            t2.find('.top-title-bar-spacer').css('height', '37px');
                            t2.find('.component-detail-top-bar-static-flex').css('height', '35px');
                            t2.find('.component-detail-top-bar-static-spacer').css('height', '35px');
                        }
                        n.css('margin', m);

                        divTocaReferenceDetailVideo.hide();
                        divTocaReferenceDetail.show();
                    });
                }

                if (AMO.UI.SuppressHashUpdate === false) {
                    if (typeof index !== 'undefined') {
                        var hash = GetLocationHash() + '|' + index;
                        if (typeof parentIndex !== 'undefined') {
                            hash = '0|5|' + parentIndex + '|' + index;
                        }
                        AMO.UI.SetAppHashRoute(hash, true);
                    }
                }

                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('TOCA Reference details loaded');
            });
        }
    };

    var loadSscReferenceDetails = function (title, url, index, parentIndex) {
        var divSscReferenceContainer = $('#divSscReferenceContainer');
        var divSscReferenceDetail = $('#divSscReferenceDetail');
        var divSscReferenceDetailVideo = $('#divSscReferenceDetailVideo');

        if (AMO.Utils.StringEmpty(url) === false) {

            divSscReferenceContainer.hide('fade', {}, 500, function () {

                var hashValue = GetLocationHash();

                if (url.toLowerCase().indexOf('.mp4') != -1) {
                    divSscReferenceDetail.hide();
                    divSscReferenceDetailVideo.find('.top-title-bar').remove();
                    divSscReferenceDetailVideo.find('.top-title-bar-spacer').remove();
                    divSscReferenceDetailVideo.prepend('<div class="top-title-bar"><div class="back-button-history" data-hash-value="' + hashValue + '"></div><div class="back-button-history-text">' + AMO.Utils.HtmlEncode(title) + '</div><br class="clear" /></div><div class="top-title-bar-spacer"></div>');

                    var n = divSscReferenceDetailVideo.find('.top-title-bar-spacer').next();
                    n.css('margin', '0 5px 0 5px');

                    divSscReferenceDetailVideo.show();

                    window.setTimeout(function () {
                        var videoSource = $videoSscReferenceControl.find('source');
                        if (videoSource.length > 0) {
                            videoSource.eq(0).get(0).src = url;
                            $videoSscReferenceControl.get(0).load();
                        }
                    }, 500);

                } else {

                    divSscReferenceDetail.empty();
                    divSscReferenceDetail.load(url, function () {
                        var t2 = $(this);
                        t2.prepend('<div class="top-title-bar"><div class="back-button-history" data-hash-value="' + hashValue + '"></div><div class="back-button-history-text">' + AMO.Utils.HtmlEncode(title) + '</div><br class="clear" /></div><div class="top-title-bar-spacer"></div>');

                        var n = t2.find('.component-detail-content-flex');
                        var m = '10px 5px 0 5px';
                        if (n.length == 0) {
                            n = t2.find('.top-title-bar-spacer').next();
                            m = '0 5px 0 5px';
                        } else {
                            t2.find('.title-header').hide();
                            t2.find('.top-title-bar-spacer').css('height', '37px');
                            t2.find('.component-detail-top-bar-static-flex').css('height', '35px');
                            t2.find('.component-detail-top-bar-static-spacer').css('height', '35px');
                        }
                        n.css('margin', m);
                        divSscReferenceDetail.show();
                    });
                }

                if (AMO.UI.SuppressHashUpdate === false) {
                    if (typeof index !== 'undefined') {
                        var hash = GetLocationHash() + '|' + index;
                        if (typeof parentIndex !== 'undefined') {
                            hash = '1|3|' + parentIndex + '|' + index;
                        }
                        AMO.UI.SetAppHashRoute(hash, true);
                    }
                }

                // Log user activity...
                AMO.Utils.SetUserActivityLogAuto('SSC Reference details loaded');
                
            });
        }
    };

    var scrollTop = function (topOffset, scrollSpeed) {
        var self = this;
        if (typeof topOffset == 'undefined') {
            topOffset = 0;
        }
        
        var speed = this.IsIpad === true ? 1000 : 10;
        if (typeof scrollSpeed != 'undefined') {
            speed = scrollSpeed;
        }
        // alert(speed);
        var qtip = $('.qtip-custom-content-container');
        var htmlControl = $('#htmlControl');
        var htmlBody = $('html, body');
        var objToScroll = null;
        if (qtip.is(':visible')) {
            objToScroll = qtip;
        } else if (htmlControl.is(':visible')) {
            objToScroll = htmlControl;
        } else {
            objToScroll = htmlBody;
        }
        if (self.SuppressAnimatedScroll == false) {
            objToScroll.animate({
                scrollTop: 0 + topOffset
            }, speed);
            //$('html, body').animate({
            //    scrollTop: 0 + topOffset
            //}, speed);
        } else {
            objToScroll.scrollTop(topOffset);
        }
    };

    var isIPad = (/ipad/gi).test(window.navigator.platform);
    var isChrome = (/Chrome/).test(window.navigator.userAgent) && /Google Inc/.test(window.navigator.vendor);
    var isSafari = (/Safari/).test(window.navigator.userAgent) && /Apple Computer/.test(window.navigator.vendor);
    var isMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i).test(window.navigator.userAgent);
    var eventTypeTouchClick = isMobile ? "touchstart" : "click";

    var navigateTo = function (itemToNavigate) {

        if ($.trim(itemToNavigate) === '') return;

        var itemToNavigateObject = $('#' + itemToNavigate);
        if (itemToNavigateObject.length == 0) {
            return;
        }

        AMO.UI.GoToSpecificItem = '';

        var offset = 173; //$('#nav_procedures').offset().top;  //173;
        $('html, body').animate({
            scrollTop: itemToNavigateObject.offset().top - offset
        }, 1000);
    };

    // TODO:CLEANUP -- deprecated
    var navigateToGraph = function (graphName) {
        var selectedGraph = null;
        graphName = graphName.toUpperCase();
        $('.graph-header').each(function () {
            var t = $(this);
            var title = t.find('.title span:first').text();
            if (title.length > 0) {
                title = AMO.Utils.StringReplaceSpaceWithUnderscore(title, true);
                if (title === graphName) {
                    selectedGraph = t;
                    return;
                }
            }
        });

        if (selectedGraph != null) {
            var graphTabs = $('.data-tab-container div.tab[data-scroll-to-element]');
            graphTabs.removeClass('tab-selected');

            // determine the ID of the parent....
            var parentTab = selectedGraph.parent().parent();

            // $('#FrameGraphContainerPerRunPlots').hide();
            // $('#FrameGraphContainerTrendPlots').hide();

            if (parentTab.attr('id') == 'FrameGraphContainerTrendPlots') {
                graphTabs.eq(0).addClass('tab-selected');
                $('#FrameGraphContainerTrendPlots').show();
                $('#FrameGraphContainerPerRunPlots').hide();
            } else if (parentTab.attr('id') == 'FrameGraphContainerPerRunPlots') {
                graphTabs.eq(1).addClass('tab-selected');
                $('#FrameGraphContainerPerRunPlots').show();
                $('#FrameGraphContainerTrendPlots').hide();
            }

            AMO.UI.GoToSpecificItem = '';

            var offset = 173; //$('#nav_procedures').offset().top;  //173;
            //$('html, body').animate({
            //    scrollTop: selectedGraph.offset().top - offset
            //}, 1000);
            $('html, body').scrollTop(selectedGraph.offset().top - offset);
        } else if (graphName.length > 0) {
            this.ScrollTop(0);
        }
    };

    var setAppHashRouteAuto = function (hashValue, allowAppToUpdateHash, logit) {
        var self = this;
        if (typeof hashValue == 'undefined') return;

        if (self.SuppressHashUpdate == false) {
            var hash = '';
            if (AMO.Model.selectedToolMenuId() == 0) {
                hash = AMO.Model.selectedToolMenuId() + '|' + AMO.Model.selectedTocaTabId() + '|' + hashValue;
            } else if (AMO.Model.selectedToolMenuId() == 1) {
                hash = AMO.Model.selectedToolMenuId() + '|' + AMO.Model.selectedSscTabId() + '|' + hashValue;
            }
            if (hash.length > 0) {
                self.SetAppHashRoute(hash, allowAppToUpdateHash, logit);
            }
        }
    };
    
    var setAppHashRoute = function (hashValue, allowAppToUpdateHash, logit) {
        var self = this;
        if (typeof logit === 'undefined') logit = true;
        if (typeof hashValue === 'undefined') return;
        if (typeof hashValue === 'number') hashValue = hashValue.toString();

        self.SuppressAnimatedScroll = true;

        hashValue = hashValue.toUpperCase();

        // extract hash value...
        var aTemp = hashValue.split('|');

        var menuToolId = parseInt(aTemp[0]);
        if (isNaN(menuToolId) || hashValue === '') {
            menuToolId = -1;
        }
        var subTabId = -1;
        var subTabId2 = -1;
        var subTabId3 = -1;

        if (aTemp.length > 1) {
            subTabId = parseInt(aTemp[1]);
        }
        if (aTemp.length > 2) {
            subTabId2 = parseInt(aTemp[2]);
        } 
        if (aTemp.length > 3) {
            subTabId3 = parseInt(aTemp[3]);
        }
        
        if (subTabId === -1) {
            if (menuToolId === 0) {
                subTabId = AMO.Model.selectedTocaTabId();
            } else if (menuToolId === 1) {
                subTabId = AMO.Model.selectedSscTabId();
            } else {
                subTabId = 0;
            }
        }

        if (menuToolId === 0 || menuToolId === 1) {
            if (subTabId2 === -1) {
                if (menuToolId === 0) {
                    if (subTabId === 3) {
                        subTabId2 = AMO.Model.selectedTocaTabComponentIndex;
                    } else if (subTabId === 5) {
                        subTabId2 = AMO.Model.selectedTocaTabReferenceIndex;
                    }
                } else if (menuToolId === 1) {
                    if (subTabId === 3) {
                        subTabId2 = AMO.Model.selectedSscTabReferenceIndex;
                    }
                }
            }
        }

        if (allowAppToUpdateHash) {
            // Create new entry in browser location history to mark new app state
            var h = hashValue;
            if (menuToolId === 0) {
                if (aTemp.length === 1) {
                    h = h + '|' + subTabId;
                    if (subTabId2 >= 0) {
                        h = h + '|' + subTabId2;
                    }
                    if (subTabId3 >= 0) {
                        h = h + '|' + subTabId3;
                    }
                } else if (aTemp.length === 2) {
                    if (subTabId2 >= 0) {
                        h = h + '|' + subTabId2;
                    }
                    if (subTabId3 >= 0) {
                        h = h + '|' + subTabId3;
                    }
                } else if (aTemp.length === 3) {
                    // TODO:
                }
            } else if (menuToolId === 1) {
                if (aTemp.length === 1) {
                    h = h + '|' + subTabId;
                    if (subTabId2 >= 0) {
                        h = h + '|' + subTabId2;
                    }
                    if (subTabId3 >= 0) {
                        h = h + '|' + subTabId3;
                    }
                } else if (aTemp.length === 2) {
                    if (subTabId2 >= 0) {
                        h = h + '|' + subTabId2;
                    }
                    if (subTabId3 >= 0) {
                        h = h + '|' + subTabId3;
                    }
                }
            }
           
            hashValue = h;
            SetLocationHash(hashValue);

            AMO.Utils.SetCookie("InitialAppRoute", hashValue);
            if (logit === true) {
                AMO.Utils.SetUserActivityLogAuto();
            }
        } else {
            
            self.SuppressHashUpdate = true;

            // pause all videos...
            AMO.UI.PauseAllHelpVideos();

            // special case for the DIALOG boxes..
            if ($('#divTaskHistoryContainer').is(':visible')) {
                if ($('.blockOverlay').is(':visible')) {
                    AMO.UI.HideDialog();
                    self.SuppressAnimatedScroll = false;
                    return;
                }
            }

            function selectToolMenuIndexLocal(index, cb) {
                AMO.Model.selectToolMenuIndex(index);
                cb();
            };

            function selectTocaTabIndexLocal(index, cb) {
                AMO.Model.selectTocaTabIndex(index, true);
                cb();
            };

            function selectSscTabIndexLocal(index, cb) {
                AMO.Model.selectSscTabById(index, true);
                cb();
            };
            function selectTocaTabComponentIndexLocal(index, cb) {
                $('#divTocaTabComponent .tab-menu .toggle-tab').eq(index).trigger('touchclick'); //.click();

                if (typeof cb === 'function') cb();
            };

            switch (menuToolId) {
                case -1:
                    AMO.Model.selectToolMenuIndex(-1);

                    self.SuppressHashUpdate = false;

                    // Log user activitiy
                    AMO.Utils.SetUserActivityLog(menuToolId);
                    break;
                case 0:
                    if (subTabId == 1) { // Data Tab
                        self.FlowControl([
                            function (cb) { selectToolMenuIndexLocal(menuToolId, function () { cb(); }); }
                        ], function () {
                            // put enough time to before loading the graph...
                            window.setTimeout(function () {
                                AMO.Model.selectTocaTabIndex(1, true);
                                self.SuppressHashUpdate = false;
                                self.SuppressAnimatedScroll = false;
                            }, 1000);
                        });
                        // Log user activitiy
                        AMO.Utils.SetUserActivityLog(menuToolId, subTabId);
                        break;
                    }

                    self.FlowControl([
                            function (cb) { selectToolMenuIndexLocal(menuToolId, function () { cb(); }); },
                            function (cb) { selectTocaTabIndexLocal(subTabId, function () { cb(); }); }
                    ], function () {
                        //alert("Done.");
                        if (subTabId == 3) { // TOCA component

                            selectTocaTabComponentIndexLocal(subTabId2, function () {

                                if (subTabId3 != -1) {
                                    // AMO.Utils.WriteConsole("go to the details page.... " + subTabId3);

                                    if (subTabId2 >= 1 && subTabId2 < 5) {
                                        var areas = null;
                                        if (subTabId2 == 1) {
                                            areas = $('#divTocaFrontOutside area');
                                        } else if (subTabId2 == 2) {
                                            areas = $('#divTocaFrontInside area');
                                        } else if (subTabId2 == 3) {
                                            areas = $('#divTocaBackInside area');
                                        } else if (subTabId2 == 4) {
                                            areas = $('#divTocaSchematic area');
                                        }
                                        if (areas != null && areas.length > 0) {
                                            window.setTimeout(function () {
                                                areas.eq(subTabId3).trigger('touchclick'); // .click();
                                                GS_allowHashToUpdateApp = true;
                                            }, 500);
                                        }
                                    } else if (subTabId2 == 5) {
                                        self.SuppressHashUpdate = false;
                                        window.setTimeout(function () {
                                            $('#divSchematicListContent a').eq(subTabId3).trigger('click'); //.click();
                                            self.SuppressAnimatedScroll = false;
                                            GS_allowHashToUpdateApp = true;
                                        }, 500);
                                    }
                                }
                            });

                            // Log user activitiy
                            AMO.Utils.SetUserActivityLog(menuToolId, subTabId, subTabId3);
                        } else if (subTabId == 4) { //  Fault Indicators Tab
                            var faultIndicatorCode = '1111';
                            if (aTemp.length > 2) {
                                faultIndicatorCode = aTemp[2];
                            }
                            self.LoadFaultIndicator(faultIndicatorCode);
                        } else if (subTabId == 5) { // References Tab
                            if (typeof subTabId2 === 'string') subTabId2 = parseInt(subTabId2, 10);

                            $('#divTocaReferenceContainer ul li a[data-scroll-to-element]').eq(subTabId2).trigger('click'); // 'touchclick';

                            window.setTimeout(function () {
                                if (subTabId3 > -1) {
                                    var divTab = $('#divTocaReferenceTab_' + subTabId2);
                                    var a = divTab.find('a[data-index=' + subTabId3 + ']');
                                    if (a.length > 0) {
                                        a.trigger('click'); // a.trigger('touchclick');
                                    }
                                }
                            }, 1000);
                        }
                        // self.SuppressHashUpdate = false;
                        
                        window.setTimeout(function () {
                            self.SuppressHashUpdate = false;
                            self.SuppressAnimatedScroll = false;
                            GS_allowHashToUpdateApp = true;
                        }, 1000);
                    });
                    break;
                case 1:
                    self.FlowControl([
                            function (cb) { selectToolMenuIndexLocal(menuToolId, function () { cb(); }); },
                            function (cb) { selectSscTabIndexLocal(subTabId, function () { cb(); }); }
                    ], function () {
                        if (subTabId == 3) { // References Tab
                            if (typeof subTabId2 == 'string') subTabId2 = parseInt(subTabId2, 10);

                            $('#divSscReferenceContainer ul li a[data-scroll-to-element]').eq(subTabId2).trigger('touchclick'); // .click();

                            if (subTabId3 > -1) {
                                var divTab = $('#divSscReferenceTab_' + subTabId2);

                                var a = divTab.find('a[data-index=' + subTabId3 + ']');
                                if (a.length > 0) {
                                    a.trigger('touchclick'); // .click();
                                }
                            }
                        }
                        //self.SuppressHashUpdate = false;
                        //self.SuppressAnimatedScroll = false;
                        
                        window.setTimeout(function () {
                            self.SuppressHashUpdate = false;
                            self.SuppressAnimatedScroll = false;
                            GS_allowHashToUpdateApp = true;
                        }, 1000);

                        // Log user activitiy
                        AMO.Utils.SetUserActivityLog(menuToolId, subTabId);
                    });
                    break;

                case 2:
                    var toolMenuDifferent = AMO.Model.selectedToolMenuId() != 2;
                    if (toolMenuDifferent == true) {
                        AMO.Model.selectToolMenuIndex(2);
                    }
                   
                    // self.SuppressHashUpdate = false;
                    window.setTimeout(function () {
                        self.SuppressHashUpdate = false;
                        self.SuppressAnimatedScroll = false;
                        GS_allowHashToUpdateApp = true;
                    }, 1000);

                    // Log user activitiy
                    AMO.Utils.SetUserActivityLog(2);

                    break;
                case 3:
                    var toolMenuDifferent = AMO.Model.selectedToolMenuId() != 3;
                    if (toolMenuDifferent == true) {
                        AMO.Model.selectToolMenuIndex(3);

                        window.setTimeout(function () { $('#FeedbackText').focus(); }, 1000);
                    }

                    // self.SuppressHashUpdate = false;
                    window.setTimeout(function () {
                        self.SuppressHashUpdate = false;
                        self.SuppressAnimatedScroll = false;
                        GS_allowHashToUpdateApp = true;
                    }, 1000);

                    // Log user activitiy
                    AMO.Utils.SetUserActivityLog(3);
                    break;
                default:
                    window.setTimeout(function () {
                        self.SuppressHashUpdate = false;
                        self.SuppressAnimatedScroll = false;
                        GS_allowHashToUpdateApp = true;
                    }, 1000);

                    break;
            }
        }
    };

    //var applyActivitiesTabRedBorderLine = function () {
    //    // var tableCurrentWeekTask = $('#tableCurrentWeekTask');
    //    var rows = $('#tableCurrentWeekTask tr');
    //    // reverse, to get only the last row with 'Past Due' status....
    //    $(rows.get().reverse()).each(function () {
    //        var t = $(this);
    //        var td = t.find('td:first');
    //        var isPastDue = td.attr('data-is-past-due');
    //        if (isPastDue == 'true') {
    //            t.attr('data-horizontal-bar', 'YES');
    //            t.css('border-bottom', '2px solid red');
    //            return false;
    //        }
    //    });
    //};

    var resetGraphUI = function () {
        var self = this;

        if (self.GraphIFrameControl != null) {
            self.GraphIFrameControl.get(0).contentWindow.DestroyPlot();
            self.GraphIFrameControl.remove();
            self.GraphIFrameControl = null;
        }

        var $FrameGraphContainer = $('#FrameGraphContainer');
        var $GraphDetailsContent = $('#GraphDetailsContent');

        $FrameGraphContainer.attr('data-loaded', 'false');
        $FrameGraphContainer.attr('data-graph-id', '');
        $GraphDetailsContent.attr('data-graph-id', '');

        $FrameGraphContainer.empty();
        $GraphDetailsContent.empty();

        //function clearFrameContainer(frameContainerId, graphDetailsId) {
        //    var $FrameGraphContainer = $('#' + frameContainerId);
        //    var $GraphDetailsContent = $('#' + graphDetailsId);

        //    $FrameGraphContainer.attr('data-loaded', 'false');
        //    $FrameGraphContainer.attr('data-graph-id', '');
        //    $GraphDetailsContent.attr('data-graph-id', '');

        //    $FrameGraphContainer.empty();
        //    $GraphDetailsContent.empty();
        //}

        //clearFrameContainer('FrameGraphContainer', 'GraphDetailsContent');

    }

    var resetGraphUISSC = function () {
        var self = this;

        if (self.GraphIFrameControlSSC != null) {
            self.GraphIFrameControlSSC.get(0).contentWindow.DestroyPlot();
            self.GraphIFrameControlSSC.remove();
            self.GraphIFrameControlSSC = null;
        }

        var $FrameGraphContainer = $('#FrameGraphContainerSSC');
        var $GraphDetailsContent = $('#GraphDetailsContentSSC');

        $FrameGraphContainer.attr('data-loaded', 'false');
        $FrameGraphContainer.attr('data-graph-id', '');
        $GraphDetailsContent.attr('data-graph-id', '');

        $FrameGraphContainer.empty();
        $GraphDetailsContent.empty();
    }

    var loadGraph = function (graphType, callback) {

        var $container = $('#FrameGraphContainer');
        var $plotHelpContainer = $('#GraphDetailsContent');

        var plotId = null;
        // resolve plotId by graph type
        if (typeof graphType != 'undefined' && graphType != null) {
            for (var i = 0; i < AMO.Model.toca_trend_plots().length; i++) {
                var p = AMO.Model.toca_trend_plots()[i];
                if (graphType == p.plotType) {
                    plotId = p.id;
                    break;
                }
            }
            if (plotId == null) {
                for (var i = 0; i < AMO.Model.toca_per_run_plots().length; i++) {
                    var p = AMO.Model.toca_per_run_plots()[i];
                    if (graphType == p.plotType) {
                        plotId = p.id;
                        break;
                    }
                }
            }
        }
        if (plotId == null && graphType != null) {
            // resolve by comparing the name....
            graphType = graphType.replace(/_/g, ' ').toUpperCase();

            for (var i = 0; i < AMO.Model.toca_trend_plots().length; i++) {
                var p = AMO.Model.toca_trend_plots()[i];
                if (graphType == p.plotName.toUpperCase()) {
                    plotId = p.id;
                    break;
                }
            }
            if (plotId == null) {
                for (var i = 0; i < AMO.Model.toca_per_run_plots().length; i++) {
                    var p = AMO.Model.toca_per_run_plots()[i];
                    if (graphType == p.plotName.toUpperCase()) {
                        plotId = p.id;
                        break;
                    }
                }
            }
        }

        if (plotId != null) {
            $container.attr('data-loaded', 'false');
            $container.attr('data-graph-id', '');
            $plotHelpContainer.attr('data-graph-id', '');

            // assign the new plotid
            AMO.Model.toca_selected_plot_id(plotId);
        }

        var graphId = AMO.Model.toca_selected_plot().id;
        var graphType = AMO.Model.toca_selected_plot().plotType;

        if ($plotHelpContainer.is(':empty') ||
            $plotHelpContainer.attr('data-graph-id') != graphId) {
            var plotUrl = AMO.Data.GetTOCAPlotDescriptionUrl(graphId);
            if (plotUrl.length > 0) {

                $('<div />').load(plotUrl, function () {
                    var t = $(this);

                    t.find('.drop-shadow').removeClass('drop-shadow');

                    htmlContent = t.html();

                    $plotHelpContainer.empty();
                    $plotHelpContainer.html(t.html());

                    $plotHelpContainer.attr('data-graph-id', graphId);

                    $plotHelpContainer.scrollTop(0);
                });
            }
        }

        if (AMO.UI.GraphIFrameControl == null ||
            AMO.UI.GraphIFrameControl.attr('data-loaded') == 'false' ||
            AMO.UI.GraphIFrameControl.attr('data-graph-id') != graphId) {

            // make sure the graph is destroyed...
            if (AMO.UI.GraphIFrameControl != null) {
                AMO.UI.GraphIFrameControl.get(0).contentWindow.DestroyPlot();
                AMO.UI.GraphIFrameControl.remove();
                AMO.UI.GraphIFrameControl = null;
                $('#FrameGraphContainer').empty();
            }

            AMO.UI.ShowProgress(0.0);

            var url = 'graph_hc.html?type=' + graphType + '&plotId=' + graphId + '&ts=' + new Date().getTime();
            AMO.UI.GraphIFrameControl = $('<iframe id="' + graphType + '" data-loaded="false" class=graphFrameContainer src="' + url + '"' + ' style="width:100%; height:505px; border:none;" ' + '></iframe>').appendTo($container);

            AMO.UI.GraphIFrameControl.on('load', function () {
                var thisFrame = this;
                $(this).attr('data-loaded', 'true');
                $(this).attr('data-graph-id', graphId);

                if (typeof callback != 'undefined') {
                    callback();
                }
                AMO.Utils.WriteConsole(graphType + ' - loaded (new)');

                function IsGraphLoaded() {
                    var loaded = thisFrame.contentWindow.AMO.Graph.GraphLoaded;
                    AMO.Utils.WriteConsole('AMO.Graph.GraphLoaded = ' + loaded);
                    if (loaded === true){
                        AMO.UI.HideProgress();
                    } else {
                        window.setTimeout(IsGraphLoaded, 1000);
                    }
                }
                IsGraphLoaded();

            });
        } else {
            if (typeof callback != 'undefined') {
                callback();
            }
            AMO.Utils.WriteConsole(graphType + ' - loaded (cache)');
        }
    };

    var loadGraphSSC = function (graphType, callback) {

        var $container = $('#FrameGraphContainerSSC');
        var $plotHelpContainer = $('#GraphDetailsContentSSC');

        var plotId = null;
        // resolve plotId by graph type
        if (typeof graphType != 'undefined' && graphType != null) {
            for (var i = 0; i < AMO.Model.ssc_plots().length; i++) {
                var p = AMO.Model.ssc_plots()[i];
                if (graphType == p.plotType) {
                    plotId = p.id;
                    break;
                }
            }
        }

        if (plotId != null) {
            $container.attr('data-loaded', 'false');
            $container.attr('data-graph-id', '');
            $plotHelpContainer.attr('data-graph-id', '');

            // assign the new plotid
            AMO.Model.ssc_selected_plot_id(plotId);
        }

        var graphId = AMO.Model.ssc_selected_plot().id;
        var graphType = AMO.Model.ssc_selected_plot().plotType;

        if ($plotHelpContainer.is(':empty') ||
            $plotHelpContainer.attr('data-graph-id') != graphId) {
            var plotUrl = AMO.Data.GetSSCPlotDescriptionUrl(graphId);
            if (plotUrl.length > 0) {
                $('<div />').load(plotUrl, function () {
                    var t = $(this);
                    t.find('.drop-shadow').removeClass('drop-shadow');
                    htmlContent = t.html();
                    $plotHelpContainer.empty();
                    $plotHelpContainer.html(t.html());
                    $plotHelpContainer.attr('data-graph-id', graphId);
                    $plotHelpContainer.scrollTop(0);
                });
            }
        }

        if (AMO.UI.GraphIFrameControlSSC == null ||
            AMO.UI.GraphIFrameControlSSC.attr('data-loaded') == 'false' ||
            AMO.UI.GraphIFrameControlSSC.attr('data-graph-id') != graphId) {

            // make sure the graph is destroyed...
            if (AMO.UI.GraphIFrameControlSSC != null) {
                AMO.UI.GraphIFrameControlSSC.get(0).contentWindow.DestroyPlot();
                AMO.UI.GraphIFrameControlSSC.remove();
                AMO.UI.GraphIFrameControlSSC = null;
                $('#FrameGraphContainerSSC').empty();
            }

            AMO.UI.ShowProgress(0.0);

            var url = 'graph_hc.html?type=' + graphType + '&plotId=' + graphId + '&ts=' + new Date().getTime();
            AMO.UI.GraphIFrameControlSSC = $('<iframe id="' + graphType + '" data-loaded="false" class=graphFrameContainer src="' + url + '"' + ' style="width:100%; height:505px; border:none;" ' + '></iframe>').appendTo($container);

            AMO.UI.GraphIFrameControlSSC.on('load', function () {
                var thisFrame = this;
                $(this).attr('data-loaded', 'true');
                $(this).attr('data-graph-id', graphId);

                if (typeof callback != 'undefined') {
                    callback();
                }
                AMO.Utils.WriteConsole(graphType + ' - loaded (new)');

                function IsGraphLoaded() {
                    var loaded = thisFrame.contentWindow.AMO.Graph.GraphLoaded;
                    AMO.Utils.WriteConsole('AMO.Graph.GraphLoaded = ' + loaded);
                    if (loaded == true) {
                        AMO.UI.HideProgress();
                    } else {
                        window.setTimeout(IsGraphLoaded, 1000);
                    }
                }
                IsGraphLoaded();
            });
        } else {
            if (typeof callback != 'undefined') {
                callback();
            }
            AMO.Utils.WriteConsole(graphType + ' - loaded (cache)');
        }
    };

    var enableImageZoom = function (jqImageObject, lensType, useRootAsParent) {
        var me = this;
        if (jqImageObject.length == 0) {
            return;
        }
        if (typeof lensType == 'undefined') {
            lensType = false;
        }
        if (typeof useRootAsParent == 'undefined') {
            useRootAsParent = false;
        }
        lensType = true;
        // TODO: -----------------------------------------------------------------------------------------------------------
        var parentContainer = jqImageObject.closest('.image-box-content').parent(); //jqImageObject.parent().parent().parent(); //('.image-box-content'); //jqImageObject.closest('.component-detail-content');
        if (parentContainer.length == 0) {
            parentContainer = jqImageObject.closest('.image-box-content-flex').parent();
            if (parentContainer.length == 0) {
                parentContainer = null;
            }
            //    return;
        }
        //var parentContainer = null;
        if (useRootAsParent == true) {
            parentContainer = null;
        }
        // -----------------------------------------------------------------------------------------------------------

        function imageZoom() {
            if (jqImageObject.get(0).clientWidth == 0) {
                window.setTimeout(function () { imageZoom(); }, 100);
            } else {

                me.ClearImageZoom();

                var zoomConfig = {
                    tint: true,
                    tintColour: '#CCC',
                    tintOpacity: 0.5,
                    easing: true,
                    zoomWindowWidth: 345,
                    parentContainer: parentContainer
                };

                if (lensType == true) {
                    zoomConfig = {
                        containLensZoom: true,
                        zoomType: "lens",
                        lensShape: "round",
                        lensSize: 300,
                        parentContainer: parentContainer
                    }
                }

                jqImageObject.elevateZoom(zoomConfig);
            }
        }
        imageZoom();
    };
    
    var clearImageZoom = function () {
        $('.zoomContainer').remove();
    };

    var setupComponentTabImageZoom = function () {
        var me = this;
        function delay() {
            me.ClearImageZoom();

            if ($('#divTocaOperationalOverview').is(':visible')) {
                me.EnableImageZoom($('#divTocaOperationalOverview .image-detail-container img'));
            }
            if ($('#divTocaSchematicDetail').is(':visible') && me.IsImageZoomable('divTocaSchematicDetail')) {
                me.EnableImageZoom($('#divTocaSchematicDetail .image-detail-container img'));
            }
            if ($('#divTocaComponentDetail').is(':visible') && me.IsImageZoomable('divTocaComponentDetail')) {
                me.EnableImageZoom($('#divTocaComponentDetail .image-detail-container img'));
            }
        }
        
        window.setTimeout(function () { delay();  }, 1000);
    };

    var clearVideo = function () {
        $videoReferenceControl.get(0).pause();
        $videoSscReferenceControl.get(0).pause();
    };

    var pauseAllHelpVideos = function () {
        $divHELPContainerContent.find('video').each(function () {
            var v = $(this);
            var videoControl = v.get(0);
            if (videoControl.paused === false) {
                videoControl.pause();
            }
        });

        if ($videoReferenceControl.get(0).paused === false) {
            $videoReferenceControl.get(0).pause();
        }
        if ($videoSscReferenceControl.get(0).paused === false) {
            $videoSscReferenceControl.get(0).pause();
        }
    };

    var onPlayVideo = function (e) {
        // if there are other videos currently playing pause them....
        var t = $(e);
 
        // Log user activity...
        AMO.Utils.SetUserActivityLogAuto('VIDEO-CONTROL:PLAY', e.currentSrc);

        $('video').each(function () {
            var v = $(this);
            if (t.data() != v.data()) {
                var videoControl = v.get(0);
                if (videoControl.paused === false) {
                    videoControl.pause();
                }
            }
        });
    };

    var onPauseVideo = function (e) {
        // Log user activity...
        AMO.Utils.SetUserActivityLogAuto('VIDEO-CONTROL:PAUSE', e.currentSrc);
    };

    var clearGlobalSearch = function () {
        $SearchBoxText.val('');

        AMO.TOCA.SearchTOCAReferences([])
        AMO.SSC.SearchSSCReferences([]);
        AMO.UI.SearchHelp([]);

        AMO.UI.ScrollTop(0);


        $('#divFindPrevNextPanel div:first').hide('slide', { direction: 'up' }, 1000, function () {
            $('#divFindPrevNextPanel').hide();
            $('#divFindPrevNextPanel td.text-search').text('');
        });

    };

    var stopPropagation = function (event) {
        // If stopPropagation exists, run it on the original event
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        // Support: IE
        // Set the cancelBubble property of the original event to true
        event.cancelBubble = true;
    };

    var preventDefault = function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        }
    };

    var updateSampleRunPreviousNextButtons = function () {
        var divTocaRunList = $('#divTocaRunList');
        var selectedSample = divTocaRunList.find('table tbody tr.selected');
        var selectedSampleIndex = -1;
        if (selectedSample.length > 0) {
            selectedSampleIndex = parseInt(selectedSample.attr('data-sample-index'), 10);
        }
        $('.img-sample-button').removeClass('button-disable');
        if (selectedSampleIndex == 0) {
            $('.img-sample-button.previous').addClass('button-disable');
        } else if (selectedSampleIndex == (AMO.Model.tocaDirectoryList().length - 1)) {
            $('.img-sample-button.next').addClass('button-disable');
        }

        if (AMO.Model.tocaDirectoryList().length <= 1) {
            $('.img-sample-button.previous').addClass('button-disable');
            $('.img-sample-button.next').addClass('button-disable');
        }
    };

    var updateSSCPreviousNextButtons = function () {
        var divSscList = $('#divSscList');
        var selectedSsc = divSscList.find('table tbody tr.selected');
        var selectedSscIndex = -1;
        if (selectedSsc.length > 0) {
            selectedSscIndex = parseInt(selectedSsc.attr('data-ssc-index'), 10);
        }
        $('.img-ssc-button').removeClass('button-disable');
        if (selectedSscIndex === 0) {
            $('.img-ssc-button.previous').addClass('button-disable');
        } else if (selectedSscIndex === (AMO.Model.SSCHostList().length - 1)) {
            $('.img-ssc-button.next').addClass('button-disable');
        }
    };

    var updatePlotPreviousNextButtons = function (type, plotIndex, delay) {
        var topBarId = 'divTOCAPlotTopBar';
        var plotListId = 'divPlotList';
        var plotListCount = (AMO.Model.toca_per_run_plots().length + AMO.Model.toca_trend_plots().length) - 1;

        // type = 'SSC' or 'TOCA'
        if (type === 'SSC') {
            topBarId = 'divSSCPlotTopBar';
            plotListId = 'divPlotListSSC';
            plotListCount = AMO.Model.ssc_plots().length - 1;
        }

        if (typeof delay === 'undefined') delay = 0;

        function localUpdate() {
            if (typeof plotIndex === 'undefined') {
                // auto resolve plotIndex...
                var selectedPlot = $('#' + plotListId + ' li.selected');
                if (selectedPlot.length == 0) {
                    return;
                }
                plotIndex = parseInt(selectedPlot.children('a').eq(0).attr('data-plot-index'));
            }

            var prevButton = $('#' + topBarId + ' .img-plot-button.previous');
            var nextButton = $('#' + topBarId + ' .img-plot-button.next');

            prevButton.removeClass('button-disable');
            nextButton.removeClass('button-disable');

            if (plotIndex == 0) {
                prevButton.addClass('button-disable');
            } else if (plotIndex == plotListCount) {
                nextButton.addClass('button-disable');
            }
        }

        if (delay > 0) {
            window.setTimeout(function () {
                localUpdate();
            }, delay);
        } else {
            localUpdate();
        }
    };
    var updateSSCRecommendedActions = function () {
        var recommendations = AMO.Model.currentSSCStatusDetailsRecommendations();
        var htmlFiles = [];

        for (var idx = 0; idx < recommendations.length; idx++) {
            var ra = recommendations[idx];
            var key = ra.alert_message_id;
            if (key === AMO.Constants.SSCParameterKey.Latency) {
                key = AMO.Constants.SSCParameterKey.LatencyLabel;
            } else if (key === AMO.Constants.SSCParameterKey.ARP) {
                key = "Wired and Wireless";
            }

            var url = AMO.Data.GetSSCAlertMessageUrl(key);

            if (url === '') continue;

            if ($.inArray(url, htmlFiles) == -1) {
                htmlFiles.push(url);
            }
        }
        if (htmlFiles.length > 0) {
            if (AMO.Model.currentSSCStatus() === 'Offline') {
                htmlFiles.unshift('../static_contents/sscAlertMsgs/networkConnection.htm');
            }
        }

        AMO.Model.currentSSCRecommendationCount(htmlFiles.length);

        var divSSCRecommendedActions = $('#divSSCRecommendedActions');
      
        function adjustRightPanelSize() {
            var divAlertHistoryScrollableContent = $('#divAlertHistoryScrollableContent');
            var h = $('#divSSCRecommendedActions').height();
            divAlertHistoryScrollableContent.css('max-height', (450 - h) + 'px');
        }

        divSSCRecommendedActions.empty();
        if (htmlFiles.length > 0) {
            //LoadFiles.load(htmlFiles, "#divSSCRecommendedActions", function () {
            LoadFiles.loadSequentially(htmlFiles, "#divSSCRecommendedActions", function () {
                // done...
                // alert('done');
                divSSCRecommendedActions.scrollTop(0);

                window.setTimeout(function () {
                    adjustRightPanelSize();
                }, 1000);

            });
        } else {

            var tempHtml = '<div class="drop-shadow curved curved-vt-2">None</div>';
            if (AMO.Model.currentSSCStatus() === 'Offline') {
                AMO.Model.currentSSCRecommendationCount(1);
                divSSCRecommendedActions.load('../static_contents/sscAlertMsgs/networkConnection.htm', function () {
                    divSSCRecommendedActions.scrollTop(0);
                    window.setTimeout(function () {
                        adjustRightPanelSize();
                    }, 1000);
      
                });
            } else {
                divSSCRecommendedActions.html(tempHtml);
                adjustRightPanelSize();
            }
        }
    };

    var resizeSSCRightPanel = function () {
        var divSSCRecommendedActions = $('#divSSCRecommendedActions');
        var divAlertHistoryScrollableContent = $('#divAlertHistoryScrollableContent');

        var h = divSSCRecommendedActions.height();
        divAlertHistoryScrollableContent.css('max-height', (450 - h) + 'px');
    };

    var showOrientationMessage = function () {
        var self = this;

        if (self.IsIpad === false) return;

        var orientation = window.orientation;

        if (orientation === 0 || orientation === 180) {
            // alert("iPad is in Portrait mode.");
            $('#divGrowl').show('fade', {}, 1000, function () {
                window.setTimeout(function () {
                    $('#divGrowl').hide('fade', {}, 1000);
                }, 10000);
            });
        }
        else if (orientation === 90 || orientation === -90) {
            // alert("iPad is in Landscape mode.");
            // iPad is in Landscape mode. The screen is turned to the left.
            AMO.UI.AcknowledgeGrowl = false;
            $('#divGrowl').hide('fade', {}, 100, function () { });
        }
    };

    var searchHelp = function (textSearchList) {
        var self = this;

        // clean-up text first ... e.g. regular expression escaping, etc.
        var tempArr = [];
        for (var idx = 0; idx < textSearchList.length; idx++) {
            var txt = $.trim(textSearchList[idx]); //AMO.Utils.EscapeRegExp($.trim(textSearchList[idx]));
            if (txt == '') continue;
            tempArr.push(txt);
            AMO.Utils.WriteConsole(txt);
        }

        $divHELPContainerContent.unhighlight();

        if (tempArr.length > 0) {
            $divHELPContainerContent.highlight(tempArr);

            $divHELPContainerContent.find('p.exclude-from-search').unhighlight();
         
            self.HighlightTextsCache = $('.highlight');

            //if (self.HighlightTextsCache.length == 0) {
            //    $divFindPrevNextPanel.find('td.text-search').text('No matches found');
            //    $divFindPrevNextPanel.find('td.text-search-nav-button').addClass('button-disable');
            //} else {
            //    $divFindPrevNextPanel.find('td.text-search').text('1 of ' + self.HighlightTextsCache.length);
            //    $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="previous"]').addClass('button-disable');
            //    $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="next"]').removeClass('button-disable');
            //}
            self.ScrollToSelectedHighlight();
        }
    };

    var scrollToSelectedHighlight = function (index) {
        var self = this;
        if (typeof index == 'undefined') index = 0;

        if (self.HighlightTextsCache == null) {
            return;
        }

        if (self.HighlightTextsCache.length == 0) {
            $divFindPrevNextPanel.find('td.text-search').text('No matches found');
            $divFindPrevNextPanel.find('td.text-search-nav-button').addClass('button-disable');
            return;
        }

        // store the current index...
        $divFindPrevNextPanel.find('td.text-search-nav-button').attr('data-current-index', index);

        $divFindPrevNextPanel.find('td.text-search').text((index + 1) + ' of ' + self.HighlightTextsCache.length);

        if (index == self.HighlightTextsCache.length - 1) {
            $divFindPrevNextPanel.find('td.text-search-nav-button').removeClass('button-disable');
            if (self.HighlightTextsCache.length == 1) {
                $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="previous"]').addClass('button-disable');
                $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="next"]').addClass('button-disable');
            } else {
                if (index == 0) {
                    $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="previous"]').addClass('button-disable');
                } else {
                    $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="next"]').addClass('button-disable');
                }
            }
        } else {
            $divFindPrevNextPanel.find('td.text-search-nav-button').removeClass('button-disable');
            if (index == 0) {
                $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="previous"]').addClass('button-disable');
            } else if (index == self.HighlightTextsCache.length - 1) {
                $divFindPrevNextPanel.find('td.text-search-nav-button[data-direction="next"]').addClass('button-disable');
            }
        }

        if (index > self.HighlightTextsCache.length - 1) return;

        if ($selectedTextPrevious != null) {
            $selectedTextPrevious.removeClass('highlight-selected');
        }
        var $selectedText = self.HighlightTextsCache.eq(index);
        $selectedText.addClass('highlight-selected');
        $selectedTextPrevious = $selectedText;

        if ($selectedText.length > 0) {
            $('html, body').animate({
                scrollTop: $selectedText.offset().top - 80
            }, 500);
        }
    };

    var getAMOVideos = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'AMOvideos.json', function (data) {
            if (data != null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'Name', false);
                // initially update the ViewModel
                AMO.Model.amoVideos(data);
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    // expose/reveal public interface
    var publicInterface = {
        PreInit: preInit,
        Init: init,
        InitialAppRoute: '',
        InitializeQTip: initializeQTip,
        InitializeCrewNoteQTip: initializeCrewNoteQTip,
        InitializeCrewNote: initializeCrewNote,
        CloseAllDropDownsAndPopups: closeAllDropDownsAndPopups,
        CloseGraphSelectionStateList: closeGraphSelectionStateList,
        FlowControl: flowControl,
        CrossBrowserSpecificLogic: crossBrowserSpecificLogic,
        Resize: resize,
        AlertBox: alertBox,
        RefreshPage: refreshPage,
        HideDialog: hideDialog,
        SearchHelp: searchHelp,
        ScrollToSelectedHighlight: scrollToSelectedHighlight,
        ShowDialog: showDialog,
        ShowDialog2: showDialog2,
        ShowGraphDialog: showGraphDialog,
        ShowTaskHistoryDialog: showTaskHistoryDialog,
        ShowAddATaskDialog: showAddATaskDialog,
        ShowDialogBox: showDialogBox,
        HideDialogBox: hideDialogBox,
        ShowProgress: showProgress,
        BlockPage: blockPage,
        UnBlockPage: unBlockPage,
        HideGraphDialog: hideGraphDialog,
        HideProgress: hideProgress,
        ShowFullscreenDialog: showFullscreenDialog,
        HideFullscreenDialog: hideFullscreenDialog,
        LoadFaultIndicator: loadFaultIndicator,
        LoadReferenceDetails: loadReferenceDetails,
        LoadSscReferenceDetails: loadSscReferenceDetails,
        ScrollTop: scrollTop,
        IsIpad: isIPad,
        IsMobile: isMobile,
        EventTypeTouchClick: eventTypeTouchClick,
        IsChrome: isChrome,
        IsSafari: isSafari,
        TaskHistoryContainerHTML: null,
        AddATaskContainerHTML: null,
        Interval: 5000,
        IntervalSchedule: 60000,
        IntervalSSC: 5000, // 5 minutes == 300000
        ShowAmissPlot: true,
        SSCExclusionList: [],
        GraphControls: [], // obsolete
        GraphIFrameControl: null,
        GraphIFrameControlSSC: null,
        ResizeTimerId: null,
        GoToSpecificItem: '',
        NavigateTo: navigateTo,
        NavigateToGraph: navigateToGraph,
        SetAppHashRoute: setAppHashRoute,
        SetAppHashRouteAuto: setAppHashRouteAuto,
        SuppressHashUpdate: false,
        SuppressAnimatedScroll: false,
        // ApplyActivitiesTabRedBorderLine: applyActivitiesTabRedBorderLine,
        // GenerateIFrameGraph: generateIFrameGraph,
        ResetGraphUI: resetGraphUI,
        ResetGraphUISSC: resetGraphUISSC,
        LoadGraph: loadGraph,
        LoadGraphSSC: loadGraphSSC,
        IsImageZoomable: isImageZoomable,
        EnableImageZoom: enableImageZoom,
        ClearImageZoom: clearImageZoom,
        SetupComponentTabImageZoom: setupComponentTabImageZoom,
        ClearVideo: clearVideo,
        OnPlayVideo: onPlayVideo,
        OnPauseVideo: onPauseVideo,
        PauseAllHelpVideos: pauseAllHelpVideos,
        ClearGlobalSearch: clearGlobalSearch,
        StopPropagation: stopPropagation,
        PreventDefault: preventDefault,
        CurrentClickedElement: null,
        CurrentPopupBox: null,
        UpdateSampleRunPreviousNextButtons: updateSampleRunPreviousNextButtons,
        UpdateSSCPreviousNextButtons: updateSSCPreviousNextButtons,
        UpdatePlotPreviousNextButtons: updatePlotPreviousNextButtons,
        UpdateSSCRecommendedActions: updateSSCRecommendedActions,
        ResizeSSCRightPanel: resizeSSCRightPanel,
        ShowOrientationMessage: showOrientationMessage,
        WindowScrollTopValue: null,
        AcknowledgeGrowl: false,
        GetAMOVideos: getAMOVideos,
        HighlightTextsCache: null
    };
    return publicInterface;
}();

AMO.Utils = function () {

    var self = this;

    var getNoCacheUrl = function (url) {
        var me = this;
        if (me.StringContains(url, 'ts=') == false) {
            return url + '?ts=' + new Date().getTime();
        }
        return url;
    };

    var parseDateTime = function (dateTimeText) {
        // NOTE: the dateTimeText is very specific to AMO format which requires custom code to parse
        // the dateTextFormat is ddMMMyy HH:mm:ss, e.g. GPS 29Sep08 08:43:44

        // get rid of the 'GPS'
        var tempValue = dateTimeText.split(' ');
        var temp = tempValue[1].substr(0, 2) + ' ' +
                   tempValue[1].substr(2, 3) + ' ' +
                   '20' + tempValue[1].substr(5, 2) + ' ' +
                   tempValue[2];

        // return Date.parse(temp); -- has some issues...
        return new Date(temp);
    };

    var parseDateOnly = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    };

    var parseFormatDate = function (rawDateValue, rawDateFormat) {
        return moment(rawDateValue, rawDateFormat); // .toDate()
    }

    var parseFormatDateFormattedText = function (rawDateValue, rawDateFormat, outputFormat) {
        return this.ParseFormatDate(rawDateValue, rawDateFormat).format(outputFormat);
    }

    var parseFloatNumber = function (num) {
        return isNaN(parseFloat(num)) ? 0 : parseFloat(num);
    };
    var parseIntNumber = function (num) {
        return isNaN(parseInt(num)) ? 0 : parseInt(num);
    };

    var translateGPSDateTimeLog = function (dateTimeText) {
        // NOTE: the dateTimeText is very specific to AMO format which requires custom code to parse
        // the dateTextFormat is ddMMMyy HH:mm:ss, e.g. GPS 29Sep08 08:43:44

        // get rid of the 'GPS'
        var tempValue = dateTimeText.split(' ');
        var temp = tempValue[1].substr(0, 2) + ' ' +
                   tempValue[1].substr(2, 3) + ' ' +
                   '20' + tempValue[1].substr(5, 2) + ' ' +
                   tempValue[2];

        // return Date.parse(temp); -- has some issues...
        return temp;
    };

    var addDays = function (doubleDate, days) {
        var d = new Date(doubleDate);
        d.setDate(d.getDate() + days); 
        return d.getTime();
    };

    var subtractDays = function (doubleDate, days) {
        var d = new Date(doubleDate);
        d.setDate(d.getDate() - days); 
        return d.getTime();
    };

    var getDayNo = function (dateText) {
        var today = new Date(dateText);
        var first = new Date(today.getFullYear(), 0, 1);
        var theDay = Math.round(((today - first) / 1000 / 60 / 60 / 24) + .5, 0);
        //alert("Today is the " + theDay + (theDay == 1 ? "st" : (theDay == 2 ? "nd" : (theDay == 3 ? "rd" : "th"))) + " day of the year");
        return theDay;
    };

    var formatAMODateTime = function () {
        return this.FormatDateTime();
    }

    var formatAMODateTime2 = function (dateObject) {
        return this.FormatDateTime(dateObject, 'YYYY / DDDD:HH:mm:ss');
    }

    var formatAMODayAndTime = function (dateObject) {
        return this.FormatDateTime(dateObject, 'YYYY / DDDD:HH:mm:ss');
    }

    var formatDateTime = function (dateObject, formatString) {
        try {
            var moment_date = null;

            if (typeof formatString == 'undefined') {
                formatString = 'ddd, YYYY / DDDD:HH:mm:ss';
            }
            if (typeof dateObject != 'undefined' && dateObject != null) {
                moment_date = moment(dateObject);
            } else {
                moment_date = moment();
                moment_date.utc();
            }
            return moment_date.format(formatString);
        } catch (e) {
            return '';
        }
    };

    var formatAMOTaskWeekRange = function (dateObject) {
        if (dateObject == null || $.trim(dateObject) == '') {
            return '';
        }
        //// dateObject format is YYYY_DDDD -- scheduler's format
        //var d = moment(dateObject, 'YYYY_DDDD');
        //var startDay = d.dayOfYear(); //d.getDayOfYear2(); //d.getDayOfYear();
        //var endDay = startDay + 6;

        //return '(GMT ' + startDay + '/' + endDay + ')';


        // dateObject format is YYYY_DDDD -- scheduler's format
        var startDate = moment(dateObject, 'YYYY_DDDD');
        var endDate = startDate.clone().add('days', 6);

        return '(GMT ' + startDate.format('YYYY/DDDD') + ' - ' + endDate.format('YYYY/DDDD') + ')';
    };

    var formatAMOTaskWeekRangeNoYear = function (dateObject) {
        if (dateObject == null || $.trim(dateObject) == '') {
            return '';
        }
        //// dateObject format is YYYY_DDDD -- scheduler's format
        //var d = moment(dateObject, 'YYYY_DDDD');
        //var startDay = d.dayOfYear(); //d.getDayOfYear2(); //d.getDayOfYear();
        //var endDay = startDay + 6;

        //return '(GMT ' + startDay + '/' + endDay + ')';


        // dateObject format is YYYY_DDDD -- scheduler's format
        var startDate = moment(dateObject, 'YYYY_DDDD');
        var endDate = startDate.clone().add('days', 6);

        return '(GMT ' + startDate.format('DDDD') + ' - ' + endDate.format('DDDD') + ')';
    };

    //var convertUTCDate = function (dateObject) {
    //    var d = dateObject;
    //    if (typeof d == 'string') {
    //        d = Date.parse(dateObject);
    //    } else if (typeof d == 'undefined'){
    //        d = new Date();
    //    }
    //    //var now_utc = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()));
    //    var now_utc = new Date(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds());
    
    //    return now_utc;
    //};
    
    //var createDateAsUTC = function (date) {
    //    return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds()));
    //};

    //var convertDateToUTC = function (date) {
    //    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
    //};

    var formatAlertHistoryDateTime = function (dateText) {
        var date = moment(dateText); //Date.parse(dateText);
        var dayOfYear = date.dayOfYear(); // date.getDayOfYear2() + '';
        //if (dayOfYear.length == 1) dayOfYear = "00" + dayOfYear;
        //if (dayOfYear.length == 2) dayOfYear = "0" + dayOfYear;

        dayOfYear = this.StringPadding(dayOfYear, 3);

        return dayOfYear + '/' + date.format('HH:mm');
        //return dayOfYear + '/' + date.toString('HH:mm (yyyy)');
        //return dateText;
    };

    var formatTaskHistoryDateTime = function (dateText) {
        //var date = dateText;
        //if (typeof date == 'string') {
        //    date = Date.parse(dateText);
        //}
        var date = moment(dateText);
        var dayOfYear = date.dayOfYear(); //.getDayOfYear2() + '';

        dayOfYear = this.StringPadding(dayOfYear, 3);
        return date.year() + '/' + dayOfYear;
    };

    var formatMinutesDuration = function (totalMinutes) {
        var duration = moment.duration(totalMinutes, "minutes");
        var days = this.StringPadding(duration.days(), 2);
        var hours = this.StringPadding(duration.hours(), 2);
        var minutes = this.StringPadding(Math.round(duration.minutes()), 2);
        return  days + ":" +  hours + ":" + minutes;
    };

    var stringPadding = function (n, p, c) {
        var pad_char = typeof c !== 'undefined' ? c : '0';
        var pad = new Array(1 + p).join(pad_char);
        return (pad + n).slice(-pad.length);
    };

    var writeConsole = function (text) {
        if (typeof (console) != 'undefined') {
            console.log(text);
        }
    };

    var getUserActivityLog = function (callback) {
        AMO.Data.GetTEXTDataFromFile(AMO.Paths.RelativeDataUIPath + 'user_activity.log', function (data) {
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    var setUserActivityLogAutoDelay = function (elementName, metaData, delay) {
        var me = this;
        if (typeof delay === 'undefined') delay = 1000;

        // Log user activity
        if (AMO.GenericTimerId != null) {
            window.clearTimeout(AMO.GenericTimerId);
        }
        AMO.GenericTimerId = window.setTimeout(function () {
            me.SetUserActivityLogAuto(elementName, metaData);
        }, delay);
    };

    var setUserActivityLogAuto = function (elementName, metaData) {
        var hash = '';
        if (typeof GetLocationHash != 'undefined') {
            hash = GetLocationHash();
        } else if (typeof window.parent.GetLocationHash != 'undefined') {
            hash = window.parent.GetLocationHash();
        }
        var tempArr = hash.split('|');
        if (tempArr.length === 0 || hash === '') {
            return;
        }

        var viewId = -1;
        var moduleId = -1;
        var subModuleId = -1;

        if (tempArr.length > 0) {
            viewId = parseInt(tempArr[0]);    
        }

        switch(viewId) {
            case 0:
                moduleId = 0;
                if (tempArr.length > 1) {
                    moduleId =  parseInt(tempArr[1]);    
                }
                switch (moduleId) {
                    case 3:
                        subModuleId = 0;
                        if (tempArr.length > 2) {
                            subModuleId = parseInt(tempArr[2]);    
                        }
                        break;
                    case 4:
                        subModuleId = -1;
                        if (tempArr.length > 2) {
                            if ($.trim(elementName).length == 0) {
                                elementName = 'FAULTCODE_' + tempArr[2];
                            } else {
                                elementName = 'FAULTCODE_' + tempArr[2] + '>' + elementName;
                            }
                        }
                        //else {
                        //    elementName = 'FAULTCODE_1111';
                        //}
                        break;
                    case 5:
                        subModuleId = 0;
                        if (tempArr.length > 2) {
                            subModuleId = parseInt(tempArr[2]);
                        }
                        break;
                    default:
                        break;
                }
                break;
            case 1:
                moduleId = 0;
                if (tempArr.length > 1) {
                    moduleId = parseInt(tempArr[1]);
                }
                switch (moduleId) {
                    case 3:
                        subModuleId = 0;
                        if (tempArr.length > 2) {
                            subModuleId = parseInt(tempArr[2]);
                        }
                        break;
                }
                break;
            default:
                break;
        }
        this.SetUserActivityLog(viewId, moduleId, subModuleId, elementName, metaData);
    };

    var setUserActivityLog = function (viewId, moduleId, subModuleId, elementName, metaData) {

        var viewName = 'Main Screen';
        var moduleName = '';
        var subModuleName = '';

        if (typeof moduleId === 'undefined') moduleId = -1;
        if (typeof subModuleId === 'undefined') subModuleId = -1;
        if (typeof elementName === 'undefined') elementName = '';
        if (typeof metaData === 'undefined') metaData = '';
        
        var extraInfo = [];
        switch (viewId) {
            case 0:
                viewName = 'TOCA';
                extraInfo.push('TOCA');
                switch (moduleId) {
                    case 0:
                        moduleName = 'Results';
                        extraInfo.push('Results');
                        break;
                    case 1:
                        moduleName = 'Data';
                        extraInfo.push('Data');
                        break;
                    case 2:
                        moduleName = 'Plan Input';
                        extraInfo.push('Plan Input');
                        break;
                    case 3:
                        moduleName = 'Components';
                        extraInfo.push('Components');
                        switch (subModuleId) {
                            case 0:
                                subModuleName = 'Functional Overview';
                                break;
                            case 1:
                                subModuleName = 'Front (Outside)';
                                break;
                            case 2:
                                subModuleName = 'Front (Inside)';
                                break;
                            case 3:
                                subModuleName = 'Back (Inside)';
                                break;
                            case 4:
                                subModuleName = 'Schematic';
                                break;
                            case 5:
                                subModuleName = 'States';
                                break;
                        }
                        if (subModuleName.length > 0) {
                            extraInfo.push(subModuleName);
                        }
                        break;
                    case 4:
                        moduleName = 'Fault Indicators';
                        extraInfo.push('Fault Indicators');
                        break;
                    case 5:
                        moduleName = 'References';
                        extraInfo.push('References');
                        switch (subModuleId) {
                            case 0:
                                subModuleName = 'Procedures';
                                break;
                            case 1:
                                subModuleName = 'TOCA Component Descriptions';
                                break;
                            case 2:
                                subModuleName = 'Hardware Fault Messages';
                                break;
                            case 3:
                                subModuleName = 'Software Fault Messages';
                                break;
                            case 4:
                                subModuleName = 'Analysis Plot Descriptions';
                                break;
                            case 5:
                                subModuleName = 'State Descriptions';
                                break;
                            case 6:
                                subModuleName = 'Videos';
                                break;
                        }
                        if (subModuleName.length > 0) {
                            extraInfo.push(subModuleName);
                        }
                        break;
                }
                break;
            case 1:
                viewName = 'SSC';
                extraInfo.push('SSC');
                switch (moduleId) {
                    case 0:
                        moduleName = 'Overview';
                        extraInfo.push('Overview');
                        break;
                    case 1:
                        moduleName = 'Details';
                        extraInfo.push('Details');
                        break;
                    case 2:
                        moduleName = 'Data';
                        extraInfo.push('Data');
                        break;
                    case 3:
                        moduleName = 'References';
                        extraInfo.push('References');
                        switch (subModuleId) {
                            case 0:
                                subModuleName = 'Procedures';
                                break;
                            case 1:
                                subModuleName = 'Recommended Actions';
                                break;
                            case 2:
                                subModuleName = 'Plot Descriptions';
                                break;
                            case 3:
                                subModuleName = 'Definitions';
                                break;
                        }
                        if (subModuleName.length > 0) {
                            extraInfo.push(subModuleName);
                        }
                        break;
                }
                break;
            case 2:
                viewName = 'Help';
                extraInfo.push('Help');
                break;
            case 3:
                viewName = 'Feedback';
                extraInfo.push('Feedback');
                break;
        }

        if (extraInfo.length > 0) {
            var temp = extraInfo.join(' > ');
            if (metaData.length > 0) {
                metaData = temp + ' > ' + metaData;
            } else {
                metaData = temp;
            }
        }

        var url = '';
        if (typeof window.parent.location.href != 'undefined') {
            url = window.parent.location.href;
        } else if (typeof window.location.href != 'undefined'){
            url = window.location.href;
        }
        var activityLog = {
            'View': viewName,
            'Module': moduleName,
            'SubModule': subModuleName,
            'Element': elementName,
            'MetaData': metaData,
            'BrowserInfo': window.navigator.userAgent,
            'Device': AMO.UI.IsIpad ? 'iPad' : 'SSC',
            'Url': url,
            'Time': AMO.Utils.FormatDateTime(null, 'MM/DD/YYYY HH:mm:ss')
        };

        AMO.Utils.WriteConsole(JSON.stringify(activityLog));

        var onAjaxSuccess = function (data, textStatus, jqXHR) {
            if (data != null && data.ErrorNo == 0) {
                AMO.Utils.WriteConsole('Success - User activity log');
            } else {
                AMO.Utils.WriteConsole('Fail - User activity log');
            }
        };
        var onAjaxError = function (jqXHR, textStatus, errorThrown) {
            AMO.Utils.WriteConsole('Fail - User activity log');
        };

        $.ajax({
            type: "POST",
            dataType: "json",
            cache: false,
            url: AMO.Paths.RelativeCGIScriptsPath + 'setUserActivityLog.cgi', 
            data:
            {
                "jsonFileFullPath": "../../data/ui/user_activity_log.json",
                "jsonData": encodeURI(JSON.stringify(activityLog))
            },
            success: onAjaxSuccess,
            error: onAjaxError
        });
    };

    var getDateTicks = function () {
        var currentDate = new Date();
        //currentDate.format("dddd, MMMM Do YYYY, h:mm:ss a");
        return currentDate.toLocaleTimeString();
    };

    var stringContains = function (source, searchText) {
        var retVal = false;
        try {
            if (source == null) return false;
            var pattern = new RegExp(this.EscapeRegExp(searchText), 'gi');
            var matches = source.match(pattern);
            if (matches != null && matches.length > 0) retVal = true;
        } catch (e) {
            AMO.Utils.WriteConsole('AMO.Utils.StringContains() - ' + e.toString());
        }
        return retVal;
    };

    var stringReplace = function (source, stringToSearch, stringToReplace) {
        var pattern = new RegExp(this.EscapeRegExp(stringToSearch), 'gi');
        var newSource = source.replace(pattern, stringToReplace);
        return newSource;
    };

    var stringMatch = function (source, stringPattern) {
        // stringPattern - ex "/#[a-z,\s,!~@$%^&*()-=+]*#/"
        // /#[a-z,\s,!~@$%^&*()-=+]*#/
        // var n = str.match(/#[a-z,\s,!~@$%^&*()-=+]*#/gi);
        // var n = str.match(pattern);
        // document.getElementById("demo").innerHTML = n;
        //var pattern = new RegExp(stringPattern, 'gi');
        var pattern = new RegExp(this.EscapeRegExp(stringPattern), 'gi');
        var matches = source.match(pattern);
        return matches;
    };

    var stringEmpty = function (str) {
        if (typeof str == 'undefined') return true;
        if (str == null) true;
        if ($.trim(str) == '') return true;

        return false;
    };

    var stringReplaceSpaceWithUnderscore = function (source, uppercase) {
        if (typeof source == 'undefined' || source == null) return '';

        if (typeof uppercase == 'undefined') upppercase = false;
        var result = this.StringReplace(source, ' ', '_');
        result = this.StringReplace(result, '\n', '');
        result = this.StringReplace(result, '-', '');
        result = this.StringReplace(result, '_&_', '_AND_');
        result = this.StringReplace(result, '___', '_');
        result = this.StringReplace(result, '__', '_');

        if (result.substr(result.length - 1, 1) === '_') {
            result = result.substr(0, result.length - 1);
        }
        if (uppercase === true) {
            return result.toUpperCase();
        }
        return result;
    };

    var replaceNewLineWithBr = function (text) {
        // var txt = text.replace(/\n/g, "<br />");

        txt = AMO.Utils.HtmlEncode(text);

        return txt.replace(/\n/g, "<br />");
    };

    var escapeRegExp = function (str) {
        if (typeof str == 'undefined' || str == null) return str;

        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    };

    var parseBool  = function(value) {
        return (typeof value === "undefined") ?
               false :
               // trim using jQuery.trim()'s source
               value.replace(/^s+|s+$/g, "").toLowerCase() === "true";
    }

    var parseBoolean = function (str) {
        return /^true$/i.test(str); //return /true/i.test(str);
    }

    var copyToClipboard = function (s) {
        // ie
        if (window.clipboardData && clipboardData.setData) {
            clipboardData.setData('text', s);
        }
            // others
        else {
            var flashcopier = 'flashcopier';
            if (!document.getElementById(flashcopier)) {
                var divholder = document.createElement('div');
                divholder.id = flashcopier;
                document.body.appendChild(divholder);
            }
            document.getElementById(flashcopier).innerHTML = '';
            var divinfo = '<embed src="_clipboard.swf" FlashVars="clipboard=' + encodeURIComponent(s) + '" width="0" height="0" type="application/x-shockwave-flash"></embed>';
            document.getElementById(flashcopier).innerHTML = divinfo;
        }
    };

    var sortArray = function (arrayObject, propertyName, isNumeric, isAscending) {
        if (arrayObject == null) return;
        if (typeof arrayObject == 'undefined') return;

        if (typeof isAscending == 'undefined') {
            isAscending = true;
        }
        if (typeof isNumeric == 'undefined') {
            isNumeric = true;
        }
        function sortFunction(a, b) {
            var valueA = (isNumeric && typeof a[propertyName] == 'number') ? parseInt(a[propertyName])
                                                                           : typeof a[propertyName] == 'function' ? a[propertyName]() : a[propertyName];
            var valueB = (isNumeric && typeof b[propertyName] == 'number') ? parseInt(b[propertyName])
                                                                           : typeof b[propertyName] == 'function' ? b[propertyName]() : b[propertyName];
            var isString = false;
            if (typeof valueA == 'string' && typeof valueB == 'string') {
                isString = true;
            }
            var retValue = isAscending ? (valueA > valueB ? 1 : -1) : (valueA > valueB ? -1 : 1);
            if (isString == true) {
                valueA = valueA.toUpperCase();
                valueB = valueB.toUpperCase();
                retValue = isAscending ? (valueA > valueB ? 1 : -1) : (valueA > valueB ? -1 : 1);
            }
            return retValue;
            // return intA > intB ? 1 : -1;  // ascending
            // return dateA > dateB ? -1 : 1; // descending
        };

        arrayObject.sort(sortFunction)
    };

    var inArray = function (arr, value, caseSensitive, isPartialValue)
        // Returns true if the passed value is found in the
        // array. Returns false if it is not.
    {
        if (typeof caseSensitive == 'undefined') {
            caseSensitive = false;
        }
        if (typeof isPartialValue == 'undefined') {
            isPartialValue = false;
        }

        var i;
        for (i = 0; i < arr.length; i++) {
            // use === to check for Matches. ie., identical (===),
            if (caseSensitive == false) {	//performs match even the string is case sensitive
                if (isPartialValue == true) {
                    if (AMO.Utils.StringContains(arr[i], value) || AMO.Utils.StringContains(value, arr[i])) {
                        return true;
                    }
                } else {
                if (arr[i].toLowerCase() == value.toLowerCase()) {
                    return true;
                }
                }

            } else {
                if (isPartialValue == true) {
                    if (AMO.Utils.StringContains(arr[i], value) || AMO.Utils.StringContains(value, arr[i])) {
                        return true;
                    }
                } else {
                if (arr[i] == value) {
                    return true;
                }
            }
        }
        }
        return false;
    };

    var uniqueArrayTBD = function(array) {
        return $.grep(array, function (el, index) {
            return index == $.inArray(el, array);
        });
    };

    var uniqueArray = function(array) {
        var u = {}, a = [];
        for (var i = 0; i < array.length; i++) {
            var key = array[i].toString().toLowerCase();
            if (u.hasOwnProperty(key)) {
                continue;
            }
            a.push(array[i]);
            u[key] = 1;
        }
        return a;
    };

    var uniqueArrayObject = function (array, key) {
        var u = {}, a = [];
        for (var i = 0; i < array.length; i++) {
            var objItem = array[i];
            if (u.hasOwnProperty(objItem[key])) {
                continue;
            }
            a.push(objItem);
            u[objItem[key]] = objItem[key];
        }
        return a;
    };

    var swapArrayElementsIndex = function (array, a, b) {
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        return array;
    };

    // create data points
    var createGraphPoints = function () {
        var tempArr = [];
        for (var idx = 0; idx < arguments.length; idx++) {
            tempArr.push(arguments[idx]);
        }
        return tempArr;
    };

    var getQueryString = function (url) {
        var queryString = [];
        if (typeof url === 'undefined') {
            url = window.location.href;
        }
        var tempArr = url.split('?');
        if (tempArr.length > 1) {
            tempArr = tempArr[1].split('&');
            for (var idx = 0; idx < tempArr.length; idx++) {
                var temp = tempArr[idx];
                var arr = temp.split('=');
                queryString[arr[0]] = arr[1];
            }
        }
        return queryString;
    };

    var randomColor = function () {
        return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);
    };

    var randomRGBAColor = function (range, alpha) {

        function randomColor(num) {
            return Math.floor(Math.random() * num);
        }

        if (typeof range == 'undefined') range = 250;
        if (typeof alpha == 'undefined' || alpha == '') alpha = 1;

        // create the rgb string
        var color = "rgba("
            + randomColor(255) + ","
            + randomColor(255) + ","
            + randomColor(255) + ","
            + alpha + ")";
            //+ randomColor(255) + (alpha == 1 ? ")" : ", " + alpha + ")");
        return color;
    };

    var extractSampleNumberFromWorkingDirectory = function (workingDirectory) {
        var arrTemp = workingDirectory.split('-');
        var sampleNo = AMO.Utils.StringReplace(arrTemp[0], 'sample', '');
        return sampleNo;
    };

    var extractSampleIdFromWorkingDirectory = function (workingDirectory) {
        var arrTemp = workingDirectory.split('-');
        var sampleNo = arrTemp[0] + '-' + arrTemp[1];
        return sampleNo;
    };

    var extractSampleNameFromWorkingDirectory  = function (workingDirectory) {
        var arrTemp = workingDirectory.split('-');
        var sampleName = arrTemp[0];
        return sampleName;
    };

    var extractDateTimeFromWorkingDirectory = function (workingDirectory) {
        var arrTemp = workingDirectory.split('-');
        var dt = new Date(); // AMO.Utils.FormatAMODayAndTime();
        if (arrTemp.length > 2) {
            // "25Jun13-124225".substr(0,2)
            var temp = arrTemp[1].substr(0, 2) + ' ' + arrTemp[1].substr(2, 3) + ' ' + '20' + arrTemp[1].substr(5, 2);
            temp = temp + ' ' + arrTemp[2].substr(0, 2) + ':' + arrTemp[2].substr(2, 2) + ':' + arrTemp[2].substr(4, 2);

            dt = new Date(temp); // AMO.Utils.FormatAMODayAndTime(temp);
        }
        return dt;
    };

    var translateTaskStatus = function (status) {
        var retText = '';
        switch (status.toUpperCase()) {
            case AMO.Constants.TaskStatus.SCHEDULED:
                retText = AMO.Constants.TaskStatus.SCHEDULED_LABEL;
                break;
            case AMO.Constants.TaskStatus.REQUESTED:
                retText = AMO.Constants.TaskStatus.REQUESTED_LABEL;
                break;
            case AMO.Constants.TaskStatus.COMPLETED:
                retText = AMO.Constants.TaskStatus.COMPLETED_LABEL;
                break;
            case AMO.Constants.TaskStatus.DEFERRED:
                retText = AMO.Constants.TaskStatus.DEFERRED_LABEL;
                break;
            case AMO.Constants.TaskStatus.ABORTED:
                retText = AMO.Constants.TaskStatus.ABORTED_LABEL;
                break;
            case AMO.Constants.TaskStatus.RECOMMENDED:
                retText = AMO.Constants.TaskStatus.RECOMMENDED_LABEL;
                break;
            //case AMO.Constants.TaskStatus.PAST_DUE:
            //    retText = AMO.Constants.TaskStatus.PAST_DUE_LABEL;
            //    break;
            default:
                retText = status;
                break;
        }
        return retText;
    };

    var getTaskStatusCss = function (status) {
        var retText = '';
        switch (status.toUpperCase()) {
            case AMO.Constants.TaskStatus.SCHEDULED:
                retText = 'task-status-scheduled tag-pill-simple tag-pill-gray-simple';
                break;
            case AMO.Constants.TaskStatus.REQUESTED:
                retText = 'task-status-requested tag-pill-simple tag-pill-green-simple';
                break;
            case AMO.Constants.TaskStatus.COMPLETED:
            case AMO.Constants.TaskStatus.DEFERRED:
                retText = 'task-status-completed tag-pill-simple tag-pill-gray-simple';
                break;
            case AMO.Constants.TaskStatus.ABORTED:
                retText = 'task-status-not-performed tag-pill-simple tag-pill-gray-simple';
                break;
            case AMO.Constants.TaskStatus.RECOMMENDED:
                retText = 'task-status-recommended tag-pill-simple tag-pill-blue-simple';
                break;
            //case AMO.Constants.TaskStatus.PAST_DUE:
            //    retText = 'task-status-past-due tag-pill-simple tag-pill-red-simple';
            //    break;
            default:
                // default to Gray background
                retText = 'task-status-scheduled tag-pill-simple tag-pill-gray-simple';
        }
        return retText;
    };

    // NOTE: this will only apply to IE 10 & higher -- this is a hack - Thanks Microsoft :(
    // issue is: when showing or hiding panel/div with shadows, parts of the shadow don't go away until you click or hover on them.
    var forceScreenRefresh = function (force) {
        if (typeof force == 'undefined') {
            force = false;
        }
        if ($.browser.msie || force == true) {
            var version = parseFloat($.browser.version);
            if (version > 8 || force == true) {
                $('body').css('z-index', 2);
                window.setTimeout(function () {
                    $('body').css('z-index', 1);
                }, 100);
            }
        }
    };

    var htmlEncode = function (value) {
        //create a in-memory div, set it's inner text(which jQuery automatically encodes)
        //then grab the encoded contents back out.  The div never exists on the page.
        return $('<div/>').text(value).html();
    }

    var htmlDecode = function (value) {
        return $('<div/>').html(value).text();
    };

    var urlEncode = function (value) {
        return window.encodeURIComponent(value);

    };

    var urlDecode = function (value) {
       return window.decodeURIComponent(value);
    };

    var setCookie = function (c_name, value, exdays) {
        if (typeof exdays === 'undefined') {
            exdays = 365;
        }
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    };

    var getCookie = function (c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start === -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start === -1) {
            c_value = null;
        }
        else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end === -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    };

    var generateFaultIndicatorImages = function (code) {
        var aTemp = code.split('');
        var aText = [];
        for(var idx=0; idx<aTemp.length;idx++)
        {
            aText.push('<img style="width:20px; margin-left:5px;" alt="" src="images/amo_fault_indicator_' + aTemp[idx] + '.png">');
        }
        return aText.join('');
    };

    var emptyArrayIfNullOrUndefined = function (objArr) {
        if (typeof objArr == 'undefined' || objArr == null) {
            return [];
        }
        return objArr;
    };

    var hasNoValue = function (value) {
        if (typeof value === 'undefined') return true;
        if (value === null) return true;
        if (value === '') return true;
        // if (isNaN(value)) return true;

        return false;
    };

    var hasValue = function (value) {
        return this.HasNoValue(value) === false;
    };

    var publicInterface = {
        CreateGraphPoints: createGraphPoints,
        HtmlEncode: htmlEncode,
        HtmlDecode: htmlDecode,
        URLEncode: urlEncode,
        URLDecoce: urlDecode,
        ParseDateTime: parseDateTime,
        ParseDateOnly: parseDateOnly,
        ParseFormatDate: parseFormatDate,
        ParseFormatDateFormattedText: parseFormatDateFormattedText,
        ParseFloatNumber: parseFloatNumber,
        ParseIntNumber: parseIntNumber,
        TranslateGPSDateTimeLog: translateGPSDateTimeLog,
        ParseBool: parseBool,
        ParseBoolean: parseBoolean,
        AddDays: addDays,
        CopyToClipboard: copyToClipboard,
        GetDayNo: getDayNo,
        EmptyArrayIfNullOrUndefined: emptyArrayIfNullOrUndefined,
        FormatAlertHistoryDateTime: formatAlertHistoryDateTime,
        FormatTaskHistoryDateTime: formatTaskHistoryDateTime,
        FormatMinutesDuration: formatMinutesDuration,
        FormatAMODateTime: formatAMODateTime,
        FormatAMODateTime2: formatAMODateTime2,
        FormatAMODayAndTime: formatAMODayAndTime,
        FormatDateTime: formatDateTime,
        FormatAMOTaskWeekRange: formatAMOTaskWeekRange,
        FormatAMOTaskWeekRangeNoYear: formatAMOTaskWeekRangeNoYear,
        EscapeRegExp: escapeRegExp,
        ExtractSampleNumberFromWorkingDirectory: extractSampleNumberFromWorkingDirectory,
        ExtractSampleIdFromWorkingDirectory: extractSampleIdFromWorkingDirectory,
        ExtractSampleNameFromWorkingDirectory: extractSampleNameFromWorkingDirectory,
        ExtractDateTimeFromWorkingDirectory: extractDateTimeFromWorkingDirectory,
        SubtractDays: subtractDays,
        SortArray: sortArray,
        InArray: inArray,
        UniqueArray: uniqueArray,
        UniqueArrayObject: uniqueArrayObject,
        SwapArrayElementsIndex: swapArrayElementsIndex,
        WriteConsole: writeConsole,
        SetUserActivityLog: setUserActivityLog,
        SetUserActivityLogAuto: setUserActivityLogAuto,
        SetUserActivityLogAutoDelay: setUserActivityLogAutoDelay,
        GetUserActivityLog: getUserActivityLog,
        GetDateTicks: getDateTicks,
        GenerateFaultIndicatorImages: generateFaultIndicatorImages,
        ReplaceNewLineWithBr: replaceNewLineWithBr,
        StringContains: stringContains,
        StringReplace: stringReplace,
        StringReplaceSpaceWithUnderscore: stringReplaceSpaceWithUnderscore,
        StringMatch: stringMatch,
        StringPadding: stringPadding,
        StringEmpty: stringEmpty,
        GetQueryString: getQueryString,
        GetNoCacheUrl: getNoCacheUrl,
        RandomColor: randomColor,
        RandomRGBAColor: randomRGBAColor,
        ForceScreenRefresh: forceScreenRefresh,
        TranslateTaskStatus: translateTaskStatus,
        GetTaskStatusCss: getTaskStatusCss,
        GetCookie: getCookie,
        SetCookie: setCookie,
        HasValue: hasValue,
        HasNoValue: hasNoValue
    };

    return publicInterface;
}();

AMO.CurrentState = function () {
    // var lastRun = '';

    var publicInterface = {
        SetState: function (state) {

            var stateJson = state;
            var finished_jobs_count = stateJson.finished_jobs.length;
            var error_jobs_count = stateJson.err_jobs.length;
            var idx = 0;
            this.RawStateData = state;
            this.AllFinishedJobs = [];

            if (finished_jobs_count > 0) {
                this.LastFinishedJob = stateJson.finished_jobs[finished_jobs_count - 1];

                // add all finished jobs
                idx = finished_jobs_count;
                while (idx--) {
                    var job = stateJson.finished_jobs[idx];
                    this.AllFinishedJobs.push(job);
                }
            }
            else if (finished_jobs_count == 0) {
                this.LastFinishedJob = null;
                AMO.Model.currentTOCASample('');
                AMO.Model.lastTOCASample('');

                // AMO.Model.currentTOCARunDate(''); --- TODO:CLEANUP
            } 
            
            //if (error_jobs_count > 0) {
            //    // all all error jobs
            //    idx = error_jobs_count;
            //    while (idx--) {
            //        var job = stateJson.err_jobs[idx];
            //        this.AllJobs.push(job);
            //    };
            //}

            function sortFunction(a,b){  
                var dateA = new Date(a.time).getTime();
                var dateB = new Date(b.time).getTime();
                // return dateA > dateB ? 1 : -1;  // ascending
                return dateA > dateB ? -1 : 1; // descending
            }; 

            this.AllFinishedJobs.sort(sortFunction);
            this.ErrorFound = false;
            this.LastErrorMessage = '';

            if (error_jobs_count > 0) {
                var err_job = stateJson.err_jobs[error_jobs_count - 1];
                this.ErrorFound = true;
                this.LastErrorMessage = err_job.step + ' - ' + err_job.state;
            }
        },
        RawStateData: null,
        HasStateChanged: function (state) {
            if (this.RawStateData === null) {
                return true;
            }

            var hasChanged = (state.finished_jobs.length != this.RawStateData.finished_jobs.length) ||
                             (state.running_jobs.length != this.RawStateData.running_jobs.length) ||
                             (state.err_jobs.length != this.RawStateData.err_jobs.length);

            if (hasChanged == false) {
                // more detail check....
                for (var idx = 0; idx < state.finished_jobs.length; idx++)
                {
                    if (state.finished_jobs[idx].name != this.RawStateData.finished_jobs[idx].name &&
                        state.finished_jobs[idx].time != this.RawStateData.finished_jobs[idx].time) {
                        hasChanged = true;
                        break;
                    }
                }
            }
            return hasChanged;
        },
        ErrorFound: false,
        LastErrorMessage: '',
        LastWorkingFolder: function () {
            if (this.LastFinishedJob != null && this.AllFinishedJobs.length > 0) {
                return this.LastFinishedJob.name;
            }
            return '';
        },
        CurrentWorkingFolder: function () {
            var d = AMO.Model.currentTOCASample();
            if (d.length == 0) {
                d = this.LastWorkingFolder();
            }
            return d;
        },
        LastFinishedJob: null, // {"error": 0, "name": "Sample2001-25May12-124225", "step": "Finish", "time": "Tue Jan 20 14:44:32 2013"}
        AllFinishedJobs: []
    }
    return publicInterface;
}();

AMO.Common = function () {
    var self = this;

    var getConfiguration = function (successCallback, errorCallback) {
        function onAjaxDone(data, textStatus, jqXHR) {
            
            // data - is an array of the actual directory list....
            AMO.Data.SystemConfiguration = data;

            AMO.Paths.RelativeStateFile = '../amo_monitor/state.json'; //'../' + AMO.Data.SystemConfiguration.amo_monitor.amo_state_file;
            AMO.Paths.RelativeDataAmissResultPath = '../' + AMO.Data.SystemConfiguration.data.toca_sample_dirs[0] + '/';
            AMO.Paths.RelativeDataHyDEResultPath = '../' + AMO.Data.SystemConfiguration.data.toca_sample_dirs[1] + '/';
            AMO.Paths.RelativeDataTocaResultPath = '../' + AMO.Data.SystemConfiguration.data.toca_sample_dirs[2] + '/';
            AMO.Paths.RelativeDataUIPath = '../' + AMO.Data.SystemConfiguration.data.ui_dir + '/';
            AMO.Paths.RelativeStaticFaultIndicatorsPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[0] + '/';
            AMO.Paths.RelativeStaticHydeMessagesPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[1] + '/';
            AMO.Paths.RelativeStaticPlotDescriptionsPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[2] + '/';
            AMO.Paths.RelativeStaticProceduresPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[3] + '/';
            AMO.Paths.RelativeStaticReferencesPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[4] + '/';
            AMO.Paths.RelativeStaticSoftwareMessagesPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[5] + '/';
            AMO.Paths.RelativeStaticTocaComponentsPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[6] + '/';
            AMO.Paths.RelativeStaticVideosPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[7] + '/';
            AMO.Paths.RelativeStaticJSONPath = '../' + AMO.Data.SystemConfiguration.static_contents.dirs[8] + '/';

            AMO.UI.Interval = AMO.Data.SystemConfiguration.amo_ui_timer_interval * 1000;
            AMO.UI.IntervalSchedule = AMO.Data.SystemConfiguration.amo_ui_scheduler_timer_interval * 1000;
            AMO.UI.IntervalSSC = AMO.Data.SystemConfiguration.amo_ui_ssc_timer_interval * 1000;

            AMO.UI.ShowAmissPlot = (AMO.Data.SystemConfiguration.amo_ui_show_amiss_plot === "yes" ||
                                    AMO.Data.SystemConfiguration.amo_ui_show_amiss_plot === "YES" ||
                                    AMO.Data.SystemConfiguration.amo_ui_show_amiss_plot === "Yes");

            if (typeof AMO.Data.SystemConfiguration.amo_ui_ssc_exclusion_list != 'undefined') {
                AMO.UI.SSCExclusionList = AMO.Data.SystemConfiguration.amo_ui_ssc_exclusion_list;
            }

            if (typeof AMO.Data.SystemConfiguration.amo_ui_ssc_alert_threshold != 'undefined') {
                AMO.Constants.SSCAlertThreshold = AMO.Data.SystemConfiguration.amo_ui_ssc_alert_threshold;
            }

            if (typeof AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags === 'undefined') {
                AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags = ["OK|-|wired", "OK|-|wireless", "OK|-|wired|wireless"];
            }
            if (typeof AMO.Data.SystemConfiguration.amo_ui_host_suffixes === 'undefined') {
                AMO.Data.SystemConfiguration.amo_ui_host_suffixes = [".arc.nasa.gov", ".ndc.nasa.gov"];
            }
            
            $('#AMOVersionNo').text('version ' + AMO.Data.SystemConfiguration.amo_ui_version);

            if (typeof successCallback === 'function') {
                successCallback(data, textStatus, jqXHR);
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            if (typeof errorCallback === 'function') {
                errorCallback(jqXHR, textStatus, errorThrown);
            }
        }

        var options = {
            function_name: "getConfiguration",
            url: AMO.Paths.RelativeConfigFile,
            type: 'get',
            data: AMO.Data.SystemConfiguration,
            errorMessage: 'Unable to load configuration data!',
            success_callback: onAjaxDone,
            fail_callback: onAjaxFail
        };
        AMO.Data.GetData(options);
    };

    var publicAPI = {
        GetConfiguration: getConfiguration
    };

    return publicAPI;
}();


AMO.TOCA = function () {
    var self = this;

    var getActualDirectoryList = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeDataUIPath + 'directoryList.json', function (data) {
            if (data != null) {
                AMO.Data.ActualDirectoryList = data;
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    var getProcedures = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAprocedures.json', function (data) {
            if (data != null) {
                var baseUrl = AMO.Data.SystemConfiguration[AMO.Data.SystemConfiguration.proc_url_root];

                // reconstruct the URL based on the configuration setting
                for (var idx = 0; idx < data.length; idx++) {
                    data[idx].URL = baseUrl + data[idx].URL;
                }

                var s1 = JSON.stringify(AMO.Data.TocaProcedures);
                var s2 = JSON.stringify(data);
                if (s1 !== s2) {

                    AMO.Utils.WriteConsole('TOCA Procedures changed');

                    AMO.Data.TocaProcedures = data;

                    // initially update the ViewModel
                    AMO.Model.tocaProcedures(AMO.Data.TocaProcedures);

                    // -------------------------
                    // sort by name... (this is for the Procedures & References tab)
                    var cloneData = JSON.parse(JSON.stringify(AMO.Data.TocaProcedures));
                    AMO.Utils.SortArray(cloneData, 'Name', false, true);
                    // -------------------------
                    AMO.Model.tocaProcedureList = cloneData;
                } else {
                    if (typeof callback === 'function') {
                        callback(data);
                    }
                }
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });

    };

    var getHardwareMessages = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAhardwareMsgs.json', function (data) {
            if (data != null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'Name', false);

                AMO.Data.TocaHardwareMessages = data;

                // initially update the ViewModel
                AMO.Model.tocaHardwareMessages(AMO.Data.TocaHardwareMessages);
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });

    };

    var getComponents = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAcomponents.json', function (data) {
            if (data != null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'Name', false);

                AMO.Data.TocaComponents = data;

                // initially update the ViewModel
                AMO.Model.tocaComponents(AMO.Data.TocaComponents);
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    var getStates = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAstates.json', function (data) {
            if (data != null) {
                AMO.Data.TocaStates = data;

                // sort by name... (this is for the Procedures & References tab)
                AMO.Utils.SortArray(data, 'Name', false, true);

                // initially update the ViewModel
                AMO.Model.tocaStateDescriptions(data); // this is for the Procedures & References tab

                // sort by name... (this is for the Procedures & References tab)
                var cloneData = JSON.parse(JSON.stringify(data));

                // DO NOT INCLUDE "TOCA Schematic"
                // Manually add the base schematic diagram....
                // cloneData.unshift({ "ID": 1, "Name": "TOCA Schematic", "Rationale": "", "URL": "", "tags": [] });

                AMO.Utils.SortArray(cloneData, 'ID', false, true);

                AMO.Model.tocaSchematicList = cloneData; // this is for the Components tab
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    var getStatesColorCodes = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCA_states_color_codes.json', function (data) {
            if (data != null) {
                AMO.Data.TocaStatesColorCodes = data;
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getSoftwareMessages = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCASoftwareMsgs.json', function (data) {
            if (data != null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'Name', false);

                AMO.Data.TocaSoftwareMessages = data;
                // initially update the ViewModel
                AMO.Model.tocaSoftwareMessages(AMO.Data.TocaSoftwareMessages);
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getPlotDescriptions = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAplotDescriptions.json', function (data) {
            if (data !== null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'Name', false);
                var tempData = [];
                if (AMO.UI.ShowAmissPlot === false) {
                    tempData = $.grep(data, function (e) {
                        var id = e.ID;
                        if (typeof id != 'string') {
                            id = parseInt(id);
                        }
                        return (id != 160);
                    });
                }

                AMO.Data.TocaPlotDescriptions = tempData;

                // initially update the ViewModel
                AMO.Model.tocaPlotDescriptions(AMO.Data.TocaPlotDescriptions);
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });

    };

    var getVideos = function (callback) {
   
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAvideos.json', function (data) {
            if (data !== null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'ID', true, true);

                AMO.Data.TocaVideos = data;
                // initially update the ViewModel
                AMO.Model.tocaVideos(AMO.Data.TocaVideos);
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
     
    };

    var getGlossary = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'glossary.json', function (data) {
            if (data !== null) {
                AMO.Data.TocaGlossary = data;
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getHyDEMessages = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'TOCAhydeMsgs.json', function (data) {
            if (data != null) {
                AMO.Data.TocaHyDEMessages = data;
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    
    };

    var generateFaultIndicatorImage = function (switches) {
        // switches ex. "1111", "0011", "1001", etc.
        var htmlText = [];
        var flags = switches.split('');

        htmlText.push("<ul class='list-style-none'>")
        for (var idx = 0; idx < flags.length; idx++) {
            htmlText.push("<li style='margin:0px; padding:1px; display:inline;'><img src='images/amo_fault_indicator_" + flags[idx] + ".png' alt='' style='width:20px;' /></li>");
        }
        htmlText.push("</ul>");

        return htmlText.join('');
    };

    var getTOCAResults = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeDataUIPath + 'results.json', function (data) {
            if (data != null) {
                AMO.Data.TocaResults = data;
            }
            if (typeof callback == 'function') {
                callback(data);
            }
        });
    };

    var getTasks = function (polling, callback) {
        var __func_name__ = 'getTasks';
        var me = this;

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {

            $('#divTocaTabTasksErrorBox').hide();
            $('#divTocaTabTasksContent').show();

            me.DictionaryMethods[__func_name__] = true;

            if (typeof data.RESULT == 'undefined' && typeof data.ERROR == 'undefined') {
                AMO.Data.TocaTasks = data;
                // Update Model & View...
                me.UpdateTaskModelAndView();
            } else if (typeof data.RESULT != 'undefined' && data.RESULT == 'NODATA') {
                // No new schedule available...
                data = null;
            } else if (typeof data.ERROR != 'undefined') {
                // Error...
                AMO.Utils.WriteConsole('AMO.TOCA.GetTasks() - AjaxFail [' + data.ERROR.join(',') + ']');
                data = null;
            }
       
            if (typeof callback == 'function') {
                callback(data);
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;

            $('#divTocaTabTasksErrorBox').show();
            $('#divTocaTabTasksContent').hide();


            AMO.Utils.WriteConsole('AMO.TOCA.GetTasks() - AjaxFail [' + textStatus + ']');

            if (typeof callback == 'function') {
                callback(null);
            }
        }

        var payLoad = {
            'action': polling == true ? 'schedule_if_new' : 'schedule',
            'scheduler_ts': me.ScheduleIfNewTimestamp
        };

        // AMO.Utils.WriteConsole(JSON.stringify(payLoad));

        //AMO.AjaxManager.ajax('http://amodev1.ndc.nasa.gov/lionel/amo/scheduler/scheduler.cgi', //AMO.Paths.RelativeCGISchedulerUrlPath,
        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'get' });
    };

    var getTasksHistory = function (callback) {
        var __func_name__ = 'getTasksHistory';
        var me = this;

        // don't check this anymore...
        //var isDone = me.DictionaryMethods[__func_name__];
        //if (isDone != null && isDone == true) {
        //    if (typeof callback == 'function') {
        //        callback(AMO.Data.TocaTasksHistory);
        //    }
        //    return;
        //}

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {

            me.DictionaryMethods[__func_name__] = true;

            function sortFunction(a, b) {
                var dateA = new Date(a.date_performed).getTime();
                var dateB = new Date(b.date_performed).getTime();
                // return dateA > dateB ? 1 : -1;  // ascending
                return dateA > dateB ? -1 : 1; // descending
            };

            data.toca_history.sort(sortFunction);

            AMO.Data.TocaTasksHistory = data;

            AMO.Model.tocaTasksHistory(data.toca_history);
            
            if (typeof callback == 'function') {
                callback(data);
            }
        }

        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;

            AMO.Utils.WriteConsole('AMO.TOCA.GetTasksHistory() - AjaxFail [' + textStatus + ']');

            if (typeof callback == 'function') {
                callback();
            }
        }

        var payLoad = {
            'action': 'history'
        };
        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'get' });
    };

    var addTask = function (task, callback) {
        var __func_name__ = 'addTask';
        var me = this;

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {

            me.DictionaryMethods[__func_name__] = true;

            if (typeof data.ERROR != 'undefined' || data.ERROR != null) {
                callback(data.ERROR);
                return;
            }
            
            AMO.Data.TocaTasks = data;

            // me.ScheduleIfNewTimestamp = data.timestamp;

            // Update Model & View
            me.UpdateTaskModelAndView();

            if (typeof callback == 'function') {
                callback(data);
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;

            AMO.Utils.WriteConsole('AMO.TOCA.AddTask() - AjaxFail [' + textStatus + ']');

            if (typeof callback == 'function') {
                callback('Unknown error!');
            }
        }

        var payLoad = {
            'action': 'add_task',
            'when': task.when,
            'id': task.id,
            'crew_note': task.crew_note
            };

        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'post' })
    };

    var updateTaskCrewNote = function (task, callback) {
        var __func_name__ = 'updateTaskCrewNote';
        var me = this;

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {

            me.DictionaryMethods[__func_name__] = true;

            if (typeof data.RESULT != 'undefined' && data.RESULT == 'OK') {
                if (typeof callback == 'function') {
                    callback(data);
                }
            }
            else if (typeof data.ERROR != 'undefined' || data.ERROR != null) {
                AMO.Utils.WriteConsole(data.ERROR.join('<br />'));
                if (typeof callback == 'function') {
                    callback('Error updating crew note!');
                }
            } else {
                if (typeof callback == 'function') {
                    callback('Error updating crew note!');
                }
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;
            AMO.Utils.WriteConsole('AMO.TOCA.UpdateTaskCrewNote() - AjaxFail [' + textStatus + ']');
            if (typeof callback == 'function') {
                callback('Unknown error!');
            }
        }

        var payLoad = {
            'action': 'edit_request',
            'uuid': task.uuid,
            'crew_note': task.crew_note
        };

        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'post' })
    };

    var updateTaskStatus = function (task, newStatus, callback) {
        var __func_name__ = 'updateTaskStatus';
        var me = this;

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {

            me.DictionaryMethods[__func_name__] = true;

            AMO.Data.TocaTasks = data;

            // me.ScheduleIfNewTimestamp = data.timestamp;

            // Update Model & View
            me.UpdateTaskModelAndView();

            if (typeof callback == 'function') {
                callback(data);
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;

            AMO.Utils.WriteConsole('AMO.TOCA.UpdateTaskStatus() - AjaxFail [' + textStatus + ']');

            if (typeof callback == 'function') {
                callback();
            }
        }

        //"date_due": dueDateEntered.format('YYYY_DDDD'),
        //"id": selectedProcedureId,
        //"procedure": selectedProcedureObject.Name,
        //"status": AMO.Constants.TaskStatus.REQUESTED //AMO.Constants.TaskStatus.MANUALLY_ADDED,
        var payLoad = null;
        if (newStatus == AMO.Constants.TaskStatus.REQUESTED) {
            payLoad = {
                'action': 'schedule_request',
                'date_due': task.due_date,
                'id': task.procedure,
                'priority': task.priority,
                'crew_note': task.crew_note()
            };
        } else {
            payLoad = {
                'action': 'update_status',
                'date_due': task.due_date,
                'id': task.procedure,
                'old_status': task.status(),
                'new_status': newStatus
            };
        }
        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'post' })
    };

    var cancelRequestedTask = function (task, callback) {
        var __func_name__ = 'cancelRequestedTask';
        var me = this;

        me.DictionaryMethods[__func_name__] = false;

        function onAjaxDone(data, textStatus, jqXHR) {
            if (typeof data.ERROR != 'undefined' || data.ERROR != null) {
                callback(data.ERROR.join('<br />'));
                return;
            }

            AMO.Data.TocaTasks = data;

            // me.ScheduleIfNewTimestamp = data.timestamp;

            // Update Model & View
            me.UpdateTaskModelAndView();

            if (typeof callback == 'function') {
                callback(data);
            }
        }
        function onAjaxFail(jqXHR, textStatus, errorThrown) {
            me.DictionaryMethods[__func_name__] = true;

            AMO.Utils.WriteConsole('AMO.TOCA.CancelRequestedTask() - AjaxFail [' + textStatus + ']');

            if (typeof callback == 'function') {
                callback('Unknown error!');
            }
        }

        //"action": cancel_request
        //"id": selectedProcedureId,
        //"date_due": dueDateEntered.format('YYYY_DDDD'),
        var payLoad = {
            'action': 'cancel_request',
            'uuid': task.uuid
        };
        AMO.AjaxManager.ajax(AMO.Paths.RelativeCGISchedulerUrlPath,
                             payLoad,
                             onAjaxDone,
                             onAjaxFail,
                             { type: 'post' })
    };

    var updateTaskModelAndView = function () {
        var me = this;
        var data = AMO.Data.TocaTasks;

        // update the Timestamp...
        me.ScheduleIfNewTimestamp = data.timestamp;

        // Massage the return data and distribute them to the ko Model...
        AMO.Model.tocaCurrentWeekStartDate('');
        AMO.Model.tocaNextWeekStartDate('');
        AMO.Model.tocaFutureWeekStartDate('');


        function sortFunction(a, b) {
            var valueA = a.priority; // moment(a.due_date, 'YYYY_DDDD_hh:mm').toDate();
            var valueB = b.priority; // moment(b.due_date, 'YYYY_DDDD_hh:mm').toDate();
            return valueA > valueB ? 1 : -1;  // ascending
            // return valueA > valueB ? -1 : 1; // descending
        };

        var ctr = 0;
        for (var key in data.toca_schedule) {
            var schedules = [];
            switch (ctr) {
                case 0:
                    AMO.Model.tocaCurrentWeekStartDate(key);
                    var tasks = data.toca_schedule[key];
                    //for (var idx = tasks.length -1; idx >= 0; idx--)
                    for (var idx = 0; idx < tasks.length; idx++) {
                        var task = new AMO.Task(key, tasks[idx]);
                        schedules.push(task);
                    }
                    schedules.sort(sortFunction);
                    AMO.Model.tocaCurrentWeekSchedule(schedules);
                    break;
                case 1:
                    AMO.Model.tocaNextWeekStartDate(key);
                    var tasks = data.toca_schedule[key];
                    for (var idx = 0; idx < tasks.length; idx++) {
                        var task = new AMO.Task(key, tasks[idx]);
                        schedules.push(task);
                    }
                    schedules.sort(sortFunction);
                    AMO.Model.tocaNextWeekSchedule(schedules);
                    break;
                case 2:
                    AMO.Model.tocaFutureWeekStartDate(key);
                    var tasks = data.toca_schedule[key];
                    for (var idx = 0; idx < tasks.length; idx++) {
                        var task = new AMO.Task(key, tasks[idx]);
                        schedules.push(task);
                    }
                    schedules.sort(sortFunction);
                    AMO.Model.tocaFutureWeekSchedule(schedules);
                    break;
            }
            ctr++;
        }

    };

    var setJsonFile = function (jsonFilePath, jsonDataObject, formatted) {
        // jsonFilePath - i.e. "../../static_contents/json/TOCA_states_color_codes.json"
        var onAjaxSuccess = function (data, textStatus, jqXHR) {
            if (data.ErrorNo == 0) {
                // alert(data.Message);
            } else {
                AMO.Utils.WriteConsole(data.Message);
            }
        };
        var onAjaxError = function (jqXHR, textStatus, errorThrown) {
            AMO.Utils.WriteConsole(textStatus);
        };

        var jData = (formatted == true) ? JSON.stringify(jsonDataObject, null, '\t') : JSON.stringify(jsonDataObject);
        if (typeof formatted == 'undefined') formatted = 'YES';

        $.ajax({
            type: "POST",
            dataType: "json",
            cache: false,
            url:  AMO.Paths.RelativeCGIScriptsPath + 'setJSONData.cgi',
            data:
            {
                "jsonFileFullPath": encodeURI(jsonFilePath),
                "jsonData": encodeURI(jData),
                "jsonFormatted": formatted
            },
            success: onAjaxSuccess,
            error: onAjaxError
        });
    };

    var sendFeedback = function () {
        var FeedbackText = $('#FeedbackText');
        var FeedbackErrorText = $('#FeedbackErrorText');
        var FeedbackSubmittedText = $('#FeedbackSubmittedText');
        var FeedbackSubmitButton = $('#FeedbackSubmitButton');
        var FeedbackCancelButton = $('#FeedbackCancelButton');

        var FeedbackTextValue = FeedbackText.val();

        FeedbackErrorText.hide();
        FeedbackText.removeClass('error-border');
        if ($.trim(FeedbackTextValue) === '') {
            FeedbackErrorText.show();
            FeedbackText.addClass('error-border');

            if (AMO.UI.IsIpad === true) {
                AMO.UI.ScrollTop(0, 500);
                window.setTimeout(function () {
                    AMO.UI.ScrollTop(FeedbackText.offset().top - 20, 500);
                    window.setTimeout(function () { FeedbackText.focus(); }, 1000);
                }, 500);
            } else {
                window.setTimeout(function () { FeedbackText.focus(); }, 1000);
            }

            return;
        }

        var feedBackButtonText = FeedbackSubmitButton.text();
        FeedbackSubmitButton.hide();
        FeedbackCancelButton.hide();

        FeedbackSubmitButton.text('Write Feedback');
        var feedBack = {
            'DateTimeSubmitted':  AMO.Utils.FormatDateTime(null, 'MM/DD/YYYY HH:mm:ss'), //AMO.Utils.FormatAMODateTime(),
            'Feedback': FeedbackTextValue
        };

        FeedbackText.val('Please wait while sending your feedback...');

        var onAjaxSuccess = function (data, textStatus, jqXHR) {
            if (data.ErrorNo == 0) {
                // alert(data.Message);
                FeedbackText.hide('fade', {}, 1000, function () {
                    FeedbackSubmittedText.show('fade', {}, 1000, function () {
                        FeedbackText.val('');
                        FeedbackSubmitButton.show();
                        FeedbackCancelButton.hide();
                    });
                });
            } else {
                AMO.UI.AlertBox('Unable to send your feedback!');
                FeedbackSubmitButton.text('Submit');
                FeedbackSubmitButton.show();
                FeedbackCancelButton.show();
                window.setTimeout(function () { FeedbackText.focus(); }, 1000);
            }

            AMO.UI.ScrollTop(0, 500);
            window.setTimeout(function () {
                AMO.UI.ScrollTop(0, 500);
            }, 500);
        };
        var onAjaxError = function (jqXHR, textStatus, errorThrown) {
            FeedbackText.val(FeedbackTextValue);
            FeedbackSubmitButton.text(feedBackButtonText);

            AMO.UI.AlertBox('Unable to send your feedback!');

            FeedbackSubmitButton.show();
            FeedbackCancelButton.show();
            
            window.setTimeout(function () { FeedbackText.focus(); }, 1000);

            AMO.UI.ScrollTop(0, 500);
            window.setTimeout(function () {
                AMO.UI.ScrollTop(0, 500);
            }, 500);
        };

        $.ajax({
            type: "POST",
            dataType: "json",
            cache: false,
            url: AMO.Paths.RelativeCGIScriptsPath + 'setFeedbackData.cgi', //AMO.Paths.RelativeCGIScriptsPath + 'setJSONData.cgi',
            data:
            {
                "jsonFileFullPath": "../../data/ui/feedback.json",
                "jsonData": encodeURI(JSON.stringify(feedBack))
            },
            success: onAjaxSuccess,
            error: onAjaxError
        });
    };

    var resetFeedback = function () {

        var FeedbackText = $('#FeedbackText');
        var FeedbackErrorText = $('#FeedbackErrorText');
        var FeedbackSubmittedText = $('#FeedbackSubmittedText');
        var FeedbackSubmitButton = $('#FeedbackSubmitButton');
        var FeedbackCancelButton = $('#FeedbackCancelButton');

        if ($.trim(FeedbackText.val()) !== '') {
            return;
        }

        FeedbackText.val('');
        FeedbackText.removeClass('error-border');
        FeedbackSubmitButton.text('Submit');
        FeedbackSubmittedText.hide();

        FeedbackText.show();
        FeedbackSubmitButton.show();
        FeedbackCancelButton.hide();

        FeedbackErrorText.hide();

        if (AMO.Model.selectedToolMenuId() == 3) {
            window.setTimeout(function () { FeedbackText.focus(); }, 1000);
        }
    };

    var searchTOCAReferences = function (textSearchList) {
        // clean-up text first ... e.g. regular expression escaping, etc.
        var tempArr = [];
        for (var idx = 0; idx < textSearchList.length; idx++) {
            var txt = $.trim(textSearchList[idx]); //AMO.Utils.EscapeRegExp($.trim(textSearchList[idx]));
            if (txt == '') continue;
            tempArr.push(txt);
            AMO.Utils.WriteConsole(txt);
        }
        textSearchList = tempArr;

        AMO.Data.CurrentSearchList = textSearchList;

        var cloneProcedures = JSON.parse(JSON.stringify(AMO.Data.TocaProcedures));
        var cloneComponents = JSON.parse(JSON.stringify(AMO.Data.TocaComponents));
        var cloneHardwareMessages = JSON.parse(JSON.stringify(AMO.Data.TocaHardwareMessages));
        var cloneSoftwareMessages = JSON.parse(JSON.stringify(AMO.Data.TocaSoftwareMessages));
        var clonePlotDescriptions = JSON.parse(JSON.stringify(AMO.Data.TocaPlotDescriptions));
        var cloneStates = JSON.parse(JSON.stringify(AMO.Data.TocaStates));
        var cloneVideos = JSON.parse(JSON.stringify(AMO.Data.TocaVideos));

        //TocaProcedures: []        -- tocaProcedures
        //TocaComponents: []        -- tocaComponents
        //TocaHardwareMessages: []  -- tocaHardwareMessages
        //TocaSoftwareMessages: []  -- tocaSoftwareMessages
        //TocaPlotDescriptions: []  -- tocaPlotDescriptions
        //TocaStates: []            -- tocaStateDescriptions
        //TocaVideos: []            -- tocaVideos

        if (textSearchList.length == 0) {
            AMO.Model.tocaProcedures(cloneProcedures);
            AMO.Model.tocaComponents(cloneComponents);
            AMO.Model.tocaHardwareMessages(cloneHardwareMessages);
            AMO.Model.tocaSoftwareMessages(cloneSoftwareMessages);
            AMO.Model.tocaPlotDescriptions(clonePlotDescriptions);
            AMO.Model.tocaStateDescriptions(cloneStates);
            AMO.Model.tocaVideos(cloneVideos);
        } else {
            
            function getSearchResult(cloneArray) {
                var retArray = [];
                for (var index = 0; index < cloneArray.length; index++) {
                    var item = cloneArray[index];
                    var addItem = false;
                    // uses AND operation instead of OR

                    // AND operation
                    for (var idx = 0; idx < textSearchList.length; idx++) {
                        var textSearch = $.trim(textSearchList[idx]);
                        if (textSearch == '') continue;
                        var itemName = AMO.Utils.HtmlDecode(item.Name);
                        if (AMO.Utils.StringContains(itemName, textSearch) == true) {
                            addItem = true;
                            // break;
                        } else {
                            addItem = false;
                            break;
                        }
                    }
                    if (addItem == true) {
                        retArray.push(item);
                    }

                    if (textSearchList.length > 0 && item.tags.length > 0 && addItem == false) {
                        for (var idx = 0; idx < textSearchList.length; idx++) {
                            var textSearch = $.trim(textSearchList[idx]);
                            if (textSearch == '') continue;

                            if (AMO.Utils.InArray(item.tags, textSearch, false, true)) {
                                addItem = true;
                                // break;
                            } else {
                                addItem = false;
                                break;
                            }
                        }
                        if (addItem == true) {
                            retArray.push(item);
                        }
                    }
                }
                return retArray;
            };
            
            var resultCloneProcedures = getSearchResult(cloneProcedures);
            var resultCloneComponents = getSearchResult(cloneComponents);
            var resultCloneHardwareMessages = getSearchResult(cloneHardwareMessages);
            var resultCloneSoftwareMessages = getSearchResult(cloneSoftwareMessages);
            var resultClonePlotDescriptions = getSearchResult(clonePlotDescriptions);
            var resultCloneStates = getSearchResult(cloneStates);
            var resultCloneVideos = getSearchResult(cloneVideos);

            AMO.Model.tocaProcedures(resultCloneProcedures);
            AMO.Model.tocaComponents(resultCloneComponents);
            AMO.Model.tocaHardwareMessages(resultCloneHardwareMessages);
            AMO.Model.tocaSoftwareMessages(resultCloneSoftwareMessages);
            AMO.Model.tocaPlotDescriptions(resultClonePlotDescriptions);
            AMO.Model.tocaStateDescriptions(resultCloneStates);
            AMO.Model.tocaVideos(resultCloneVideos);
        }

        $('#divTocaReferenceContent .iphone-list-nav a, #divTocaReferenceContent .iphone-list-nav div').unhighlight();
        $('#divTocaReferenceContent .iphone-list-nav a, #divTocaReferenceContent .iphone-list-nav div').highlight(textSearchList);
    };
    
    var searchReferencesByContext = function (textSearchList, componentIdToExclude, jqContainer) {

        var tempA = AMO.Utils.UniqueArray(textSearchList);
        textSearchList = tempA;
        // clean-up text first ... e.g. regular expression escaping, etc.
        var tempArr = [];
        for (var idx = 0; idx < textSearchList.length; idx++) {
            var txt = AMO.Utils.EscapeRegExp($.trim(textSearchList[idx]));
            if (txt == '') continue;
            tempArr.push(txt);
        }
        textSearchList = tempArr;

        AMO.Data.CurrentSearchListByContext = textSearchList;

        //TocaProcedures: []        -- tocaProcedures
        //TocaComponents: []        -- tocaComponents
        //TocaHardwareMessages: []  -- tocaHardwareMessages
        //TocaSoftwareMessages: []  -- tocaSoftwareMessages
        //TocaPlotDescriptions: []  -- tocaPlotDescriptions
        //TocaStates: []            -- tocaStateDescriptions
        //TocaVideos: []            -- tocaVideos

        if (textSearchList.length == 0) {
            resultCloneProcedures = [];
            resultCloneComponents = [];
            resultCloneHardwareMessages = [];
            resultCloneSoftwareMessages = [];
            resultClonePlotDescriptions = [];
            resultCloneStates = [];
            resultCloneVideos = [];
        } else {

            var cloneProcedures = JSON.parse(JSON.stringify(AMO.Data.TocaProcedures));
            var cloneComponents = JSON.parse(JSON.stringify(AMO.Data.TocaComponents));
            var cloneHardwareMessages = JSON.parse(JSON.stringify(AMO.Data.TocaHardwareMessages));
            var cloneSoftwareMessages = JSON.parse(JSON.stringify(AMO.Data.TocaSoftwareMessages));
            var clonePlotDescriptions = JSON.parse(JSON.stringify(AMO.Data.TocaPlotDescriptions));
            var cloneStates = JSON.parse(JSON.stringify(AMO.Data.TocaStates));
            var cloneVideos = JSON.parse(JSON.stringify(AMO.Data.TocaVideos));

            // by context use OR operation
            function getSearchResult(cloneArray) {
                var retArray = [];
                for (var index = 0; index < cloneArray.length; index++) {
                    var item = cloneArray[index];
                    var addItem = false;

                    // do not inlude self referencing reference
                    if (item.ID == componentIdToExclude) { continue; }

                    // uses OR operation instead of AND

                    // the following is an example of OR
                    for (var idx = 0; idx < textSearchList.length; idx++) {
                        var textSearch = textSearchList[idx];
                        if ($.trim(textSearch) == '') continue;

                        // search text in the name field...    
                        if (AMO.Utils.StringContains(item.Name, textSearch) == true) {
                            addItem = true;
                            break;
                        }

                        // search tags...
                        if (textSearchList.length > 0 && item.tags.length > 0 && addItem == false) {
                            for (var idx2 = 0; idx2 < item.tags.length; idx2++) {
                                var tagName = $.trim(item.tags[idx2]);
                                if (AMO.Utils.InArray(textSearchList, tagName)) {
                                    addItem = true;
                                    break;
                                }
                            }

                        }
                    }

                    if (addItem == true) {
                        retArray.push(item);
                    }
                }
                return retArray;
            };

            var resultCloneProcedures = getSearchResult(cloneProcedures);
            var resultCloneComponents = getSearchResult(cloneComponents);
            var resultCloneHardwareMessages = getSearchResult(cloneHardwareMessages);
            var resultCloneSoftwareMessages = getSearchResult(cloneSoftwareMessages);
            var resultClonePlotDescriptions = getSearchResult(clonePlotDescriptions);
            var resultCloneStates = getSearchResult(cloneStates);
            var resultCloneVideos = getSearchResult(cloneVideos);


            AMO.Model.tocaProceduresContext(resultCloneProcedures);
            AMO.Model.tocaComponentsContext(resultCloneComponents);
            AMO.Model.tocaHardwareMessagesContext(resultCloneHardwareMessages);
            AMO.Model.tocaSoftwareMessagesContext(resultCloneSoftwareMessages);
            AMO.Model.tocaPlotDescriptionsContext(resultClonePlotDescriptions);
            AMO.Model.tocaStateDescriptionsContext(resultCloneStates);
            AMO.Model.tocaVideosContext(resultCloneVideos);

            if (typeof jqContainer != 'undefined') {
                //var combined = resultCloneProcedures.concat(resultCloneComponents).concat(resultCloneHardwareMessages).concat(resultCloneSoftwareMessages).concat(resultClonePlotDescriptions).concat(resultCloneStates).concat(resultCloneVideos);
                var combined = resultCloneComponents.concat(resultCloneHardwareMessages).concat(resultCloneSoftwareMessages).concat(resultClonePlotDescriptions).concat(resultCloneStates).concat(resultCloneVideos);

                var tempHtml = [];
                tempHtml.push('<h2>References:</h2>');
                tempHtml.push('<ul>');
                if (combined.length > 0 || resultCloneProcedures.length > 0) {

                    //<td class="procedure-col"><a data-bind="text: AMO.Data.GetProcedureName(procedure), attr: { 'href': AMO.Data.GetProcedureUrl(procedure)}" target="_blank"></a></td>
                    if (resultCloneProcedures.length > 0) {
                        for (var idx = 0; idx < resultCloneProcedures.length; idx++) {
                            var item = resultCloneProcedures[idx];
                            tempHtml.push('<li>');
                            //tempHtml.push('<a target="_blank" href="' + AMO.Data.GetProcedureUrl(item.ID) + '" data-procedure-url="' + AMO.Data.GetProcedureUrl(item.ID) + '">' + AMO.Utils.HtmlDecode(AMO.Utils.HtmlEncode(item.Name)) + '</a>');
                            tempHtml.push('<a target="_blank" href="javascript:void(0)" data-procedure-id="' + item.ID + '">' + AMO.Utils.HtmlDecode(AMO.Utils.HtmlEncode(item.Name)) + '</a>');
                            tempHtml.push('</li>');
                        }
                    }
                    
                    if (combined.length > 0) {
                        for (var idx = 0; idx < combined.length; idx++) {
                            var item = combined[idx];
                            tempHtml.push('<li>');
                            tempHtml.push('<a href="javascript:void(0)" class="show-full-screen" url="' + item.URL + '">' + AMO.Utils.HtmlDecode(AMO.Utils.HtmlEncode(item.Name)) + '</a>');
                            tempHtml.push('</li>');
                        }
                    }
                } else {
                    tempHtml.push('<li>');
                    tempHtml.push('<i>There are no references available</i>');
                    tempHtml.push('</li>');
                }
                
                tempHtml.push('</ul>');

                jqContainer.html(tempHtml.join(''));
            }
        }
    };

    var updateTocaSampleRunResults = function (useCurrent) {

        var tempValue = 0, tempValue2 = 0, replicateCount = 0, tocReplicate = 0;
        var idx = 0;
        var arrTemp = [], alerts = [], tempData = [];

        var amissResult = null;
        var resultData = null;
        

        if (useCurrent === true) {

            // initialize toca summary results
            if (AMO.Model.noTOCAFilesAvailable() == false) {
                AMO.Model.currentResultTypeOfAnalysis('n/a');
                AMO.Model.currentResultAverageTOC('n/a');
                AMO.Model.currentResultAverageTIC('n/a');
                AMO.Model.currentResultPercentRSDTOC('n/a');
            }

            AMO.Model.currentResultReplicates([]);
            AMO.Model.currentSampleAlerts([]);

            // reset HyDE
            AMO.Model.currentHydeResultTocaRun('');
            AMO.Model.currentHydeResultTimestamp('');
            AMO.Model.currentHydeResultFaultDetected('NA');
            AMO.Model.currentHydeResultException('None');
            AMO.Model.currentHydeResultDiagnosis([]);

            // reset AMISS
            AMO.Model.currentAmissResultFaultDetected('NA');
            AMO.Model.currentAmissAssessmentSubsystem('');
            AMO.Model.currentAmissAssessment([]);

            var currentTocaResultSummary = AMO.Data.GetTOCAResultBySample(AMO.Model.currentTOCASample());
            var tempHtml = '';
            if (currentTocaResultSummary != null) {
                tempValue = 0;
                if (currentTocaResultSummary.Sample_Type_Desc != null && currentTocaResultSummary.Sample_Type != null) {
                    AMO.Model.currentResultTypeOfAnalysis(currentTocaResultSummary.Sample_Type_Desc + ' (' + currentTocaResultSummary.Sample_Type + ')');
                } else if (currentTocaResultSummary.Sample_Type != null) {
                    AMO.Model.currentResultTypeOfAnalysis(currentTocaResultSummary.Sample_Type);
                }
                if (currentTocaResultSummary['Average_TOC_ug/L'] != null) {
                    tempValue = parseFloat(currentTocaResultSummary['Average_TOC_ug/L']);
                    if (tempValue > AMO.Constants.Threshold.TocTicValue) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + ' µg/L</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + ' µg/L';
                    }
                    AMO.Model.currentResultAverageTOC(tempHtml);
                }
                if (currentTocaResultSummary['Average_TIC_ug/L'] != null) {
                    tempValue = parseFloat(currentTocaResultSummary['Average_TIC_ug/L']);
                    if (tempValue > AMO.Constants.Threshold.TocTicValue) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + ' µg/L</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + ' µg/L';
                    }
                    AMO.Model.currentResultAverageTIC(tempHtml);
                    //AMO.Model.currentResultAverageTIC(tempValue + (tempValue > AMO.Constants.Threshold.TocTicValue ? ' µg/L <span class="up-arrow-text">↑</span>' : ' µg/L'));
                }
                if (currentTocaResultSummary['%RSD_TOC'] != null) {
                    tempValue = parseFloat(currentTocaResultSummary['%RSD_TOC']);
                    tempValue2 = parseFloat(currentTocaResultSummary['Average_TOC_ug/L']);

                    if (tempValue > AMO.Constants.Threshold.TocRsdValue && tempValue2 > AMO.Constants.Threshold.TocRsdThreshold) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + '%</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + '%';
                    }
                    AMO.Model.currentResultPercentRSDTOC(tempHtml);
                    // AMO.Model.currentResultPercentRSDTOC(tempValue + ((tempValue > AMO.Constants.Threshold.TocRsdValue && tempValue2 > AMO.Constants.Threshold.TocRsdThreshold) ? '% <span class="up-arrow-text">↑</span>' : '%'));
                }
                // the first item in the array is always the TOC
                arrTemp = [];
                replicateCount = currentTocaResultSummary.Total_Replicates != null ? parseInt(currentTocaResultSummary.Total_Replicates) : 0;

                // if (currentTocaResultSummary.Total_Replicates.length > 0) 
                if (replicateCount > 0) {
                    tocReplicate = currentTocaResultSummary.TOC_TIC_Replicates[0];
                    for (idx = 0; idx < replicateCount; idx++) {
                        var key = 'Rep_' + (idx + 1) + '_TOC[ppb]';
                        arrTemp.push(tocReplicate[key]);
                    }
                }
                AMO.Model.currentResultReplicates(arrTemp);

                // extract Alerts....
                if (currentTocaResultSummary.Alerts != null) {
                    alerts = [];
                    for (idx = 0; idx < currentTocaResultSummary.Alerts.length; idx++) {
                        var alertObj = currentTocaResultSummary.Alerts[idx];
                        var alertEntry = alertObj.Alert_Timestamp;
                        for (var idx2 = 0; idx2 < alertObj.Fault.length; idx2++) {
                            var fault = alertObj.Fault[idx2];
                            alertEntry = AMO.Utils.FormatAMODayAndTime(alertObj.Alert_Timestamp) + ' - ' + fault;
                            alerts.push(alertEntry);
                        }
                    }
                    if (alerts.length > 0) {
                        AMO.Model.currentSampleAlerts(alerts);
                    }
                }

                // extract HyDE results...
                if (currentTocaResultSummary.HyDE != null) {
                    var hydeResult = currentTocaResultSummary.HyDE.Results;

                    var timeStamp = hydeResult['Timestamp'];
                    timeStamp = timeStamp.substr(0, 4) + '-' +
                                timeStamp.substr(4, 2) + '-' +
                                timeStamp.substr(6, 2) + ' ' +
                                timeStamp.substr(9);

                    timeStamp = moment(timeStamp);

                    AMO.Model.currentHydeResultTocaRun(hydeResult['TOCA Run']);
                    AMO.Model.currentHydeResultTimestamp(timeStamp.format('dddd, MMMM Do YYYY, h:mm:ss a'));
                    AMO.Model.currentHydeResultFaultDetected(hydeResult['Fault Detected'] != null ? (hydeResult['Fault Detected'] == true ? 'YES' : 'NO') : 'NA');
                    if (hydeResult.Diagnosis.length == 0) {
                        AMO.Model.currentHydeResultFaultDetected('YES');
                    }
                    AMO.Model.currentHydeResultException(hydeResult['Exception'] == '' ? 'None' : hydeResult['Exception']);
                    AMO.Model.currentHydeResultDiagnosis(hydeResult['Diagnosis']);
                }

                // extract AMISS results...
                if (currentTocaResultSummary.AMISS != null) {
                    amissResult = currentTocaResultSummary.AMISS.Results;
                    resultData = amissResult.Data;
                    tempData = [];
                    if (resultData != null && resultData.length >= 0) {
                        AMO.Model.currentAmissResultFaultDetected('NO');
                    }
                    for (var key in resultData) {
                        var d = resultData[key];
                        if (AMO.Utils.StringContains(d.Assessment_Value, 'Out of Family')) {
                            AMO.Model.currentAmissResultFaultDetected('YES');

                            tempData.push({
                                PhaseName: d.TOCA_Phase_Name,
                                Iteration: d.Phase_Iteration_Number,
                                Result: d.Assessment_Value
                            });
                        }
                    }

                    tempData = AMO.Utils.UniqueArrayObject(tempData, 'PhaseName');
                    AMO.Utils.SortArray(tempData, 'PhaseName', false, true);

                    AMO.Model.currentAmissAssessmentSubsystem(amissResult.Subsystem);
                    AMO.Model.currentAmissAssessment(tempData);
                }
            }
        } else {

            // the last or the most recent one...

            // initialize toca summary results
            if (AMO.Model.noTOCAFilesAvailable() == false) {
                AMO.Model.lastResultTypeOfAnalysis('n/a');
                AMO.Model.lastResultAverageTOC('n/a');
                AMO.Model.lastResultAverageTIC('n/a');
                AMO.Model.lastResultPercentRSDTOC('n/a');
            }

            AMO.Model.lastResultReplicates([]);
            AMO.Model.lastSampleAlerts([]);

            // reset HyDE
            AMO.Model.lastHydeResultTocaRun('');
            AMO.Model.lastHydeResultTimestamp('');
            AMO.Model.lastHydeResultFaultDetected('NA');
            AMO.Model.lastHydeResultException('None');
            AMO.Model.lastHydeResultDiagnosis([]);

            // reset AMISS
            AMO.Model.lastAmissResultFaultDetected('NA');
            AMO.Model.lastAmissAssessmentSubsystem('');
            AMO.Model.lastAmissAssessment([]);

            var lastTocaResultSummary = AMO.Data.GetTOCAResultBySample(AMO.Model.lastTOCASample());

            if (lastTocaResultSummary != null) {
                tempValue = 0;
                if (lastTocaResultSummary.Sample_Type_Desc != null && lastTocaResultSummary.Sample_Type != null) {
                    AMO.Model.lastResultTypeOfAnalysis(lastTocaResultSummary.Sample_Type_Desc + ' (' + lastTocaResultSummary.Sample_Type + ')');
                } else if (lastTocaResultSummary.Sample_Type != null) {
                    AMO.Model.lastResultTypeOfAnalysis(lastTocaResultSummary.Sample_Type);
                }

                if (lastTocaResultSummary['Average_TOC_ug/L'] != null) {
                    tempValue = parseFloat(lastTocaResultSummary['Average_TOC_ug/L']);
                    if (tempValue > AMO.Constants.Threshold.TocTicValue) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + ' µg/L</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + ' µg/L';
                    }
                    AMO.Model.lastResultAverageTOC(tempHtml);
                    // AMO.Model.lastResultAverageTOC(tempValue + (tempValue > AMO.Constants.Threshold.TocTicValue ? ' µg/L <span class="up-arrow-text">↑</span>' : ' µg/L'));
                }
                if (lastTocaResultSummary['Average_TIC_ug/L'] != null) {
                    tempValue = parseFloat(lastTocaResultSummary['Average_TIC_ug/L']);
                    if (tempValue > AMO.Constants.Threshold.TocTicValue) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + ' µg/L</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + ' µg/L';
                    }
                    AMO.Model.lastResultAverageTIC(tempHtml);
                    // AMO.Model.lastResultAverageTIC(tempValue + (tempValue > AMO.Constants.Threshold.TocTicValue ? ' µg/L <span class="up-arrow-text">↑</span>' : ' µg/L'));
                }
                if (lastTocaResultSummary['%RSD_TOC'] != null) {
                    tempValue = parseFloat(lastTocaResultSummary['%RSD_TOC']);
                    tempValue2 = parseFloat(lastTocaResultSummary['Average_TOC_ug/L']);

                    if (tempValue > AMO.Constants.Threshold.TocRsdValue && tempValue2 > AMO.Constants.Threshold.TocRsdThreshold) {
                        // above threshold...
                        tempHtml = '<span class="bold above-threshold-color">' + tempValue + '%</span><span class="up-arrow-text">↑</span>';
                    } else {
                        tempHtml = tempValue + '%';
                    }
                    AMO.Model.lastResultPercentRSDTOC(tempHtml);
                    // AMO.Model.lastResultPercentRSDTOC(tempValue + ((tempValue > AMO.Constants.Threshold.TocRsdValue && tempValue2 > AMO.Constants.Threshold.TocRsdThreshold) ? '% <span class="up-arrow-text">↑</span>' : '%'));
                }

                // the first item in the array is always the TOC
                arrTemp = [];
                replicateCount = lastTocaResultSummary.Total_Replicates != null ? parseInt(lastTocaResultSummary.Total_Replicates) : 0;

                // if (lastTocaResultSummary.Total_Replicates.length > 0) 
                if (replicateCount > 0) {
                    tocReplicate = lastTocaResultSummary.TOC_TIC_Replicates[0];
                    for (idx = 0; idx < replicateCount; idx++) {
                        var key = 'Rep_' + (idx + 1) + '_TOC[ppb]';
                        arrTemp.push(tocReplicate[key]);
                    }
                }
                AMO.Model.lastResultReplicates(arrTemp);

                // extract Alerts....
                if (lastTocaResultSummary.Alerts != null) {
                    alerts = [];
                    for (var idx = 0; idx < lastTocaResultSummary.Alerts.length; idx++) {
                        var alert = lastTocaResultSummary.Alerts[idx];
                        var alertEntry = alert.Alert_Timestamp;
                        for (var idx2 = 0; idx2 < alert.Fault.length; idx2++) {
                            var fault = alert.Fault[idx2];
                            alertEntry = AMO.Utils.FormatAMODayAndTime(alert.Alert_Timestamp) + ' - ' + fault;
                            alerts.push(alertEntry);
                        }
                    }
                    if (alerts.length > 0) {
                        AMO.Model.lastSampleAlerts(alerts);
                    }
                }

                // extract HyDE results...
                if (lastTocaResultSummary.HyDE != null) {
                    var hydeResult = lastTocaResultSummary.HyDE.Results;
                    var timeStamp = hydeResult['Timestamp'];
                    timeStamp = timeStamp.substr(0, 4) + '-' +
                                timeStamp.substr(4, 2) + '-' +
                                timeStamp.substr(6, 2) + ' ' +
                                timeStamp.substr(9);

                    timeStamp = moment(timeStamp);

                    AMO.Model.lastHydeResultTocaRun(hydeResult['TOCA Run']);
                    AMO.Model.lastHydeResultTimestamp(timeStamp.format('dddd, MMMM Do YYYY, h:mm:ss a'));
                    AMO.Model.lastHydeResultFaultDetected(hydeResult['Fault Detected'] != null ? (hydeResult['Fault Detected'] == true ? 'YES' : 'NO') : 'NA');
                    if (hydeResult.Diagnosis.length == 0) {
                        AMO.Model.lastHydeResultFaultDetected('YES');
                    }
                    AMO.Model.lastHydeResultException(hydeResult['Exception'] == '' ? 'None' : hydeResult['Exception']);
                    AMO.Model.lastHydeResultDiagnosis(hydeResult['Diagnosis']);
                }

                // extract AMISS results...
                if (lastTocaResultSummary.AMISS != null) {
                    amissResult = lastTocaResultSummary.AMISS.Results;
                    resultData = amissResult.Data;
                    tempData = [];
                    if (resultData != null && resultData.length > 0) {
                        AMO.Model.lastAmissResultFaultDetected('NO');
                    }
                    for (var key in resultData) {
                        var d = resultData[key];
                        if (AMO.Utils.StringContains(d.Assessment_Value, 'Out of Family')) {
                            AMO.Model.lastAmissResultFaultDetected('YES');

                            tempData.push({
                                PhaseName: d.TOCA_Phase_Name,
                                Iteration: d.Phase_Iteration_Number,
                                Result: d.Assessment_Value
                            });
                        }
                    }

                    tempData = AMO.Utils.UniqueArrayObject(tempData, 'PhaseName');
                    AMO.Utils.SortArray(tempData, 'PhaseName', false, true);

                    AMO.Model.lastAmissAssessmentSubsystem(amissResult.Subsystem);
                    AMO.Model.lastAmissAssessment(tempData);
                }
            }
        }

    };

    var loadTocaData = function (callback) {
        var me = this;

        // reset data...
        me.ResetData();

        // reset graph ui...
        AMO.UI.ResetGraphUI();
        
        // this will execute the list of functions synchronously....
        // NOTE: the following functions will always get the data and will not use the cache info
        AMO.UI.FlowControl([
            function (cb) { AMO.TOCA.GetTOCAResults(function () { cb(); }); }
        ], function () {
            // alert("Done.");

            if (AMO.Model.currentTOCASample() != '') {
                me.UpdateTocaSampleRunResults(true); // true=Current/Selected TOCA run; false=Last/Recent TOCA run
            }

            if (typeof callback != 'undefined') {
                callback();
            }
        });

    }

    var resetData = function () {
        // AMISS
        AMO.Model.currentAmissResult = [];
        AMO.Model.currentAmissResultFaultDetected('NA');
        AMO.Model.currentAmissAssessmentSubsystem('');
        AMO.Model.currentAmissAssessment([]);

        // HYDE
        AMO.Model.currentHydeResultTocaRun('');
        AMO.Model.currentHydeResultTimestamp('');
        AMO.Model.currentHydeResultFaultDetected('NA');
        AMO.Model.currentHydeResultException('');
        AMO.Model.currentHydeResultDiagnosis([]);

        // CURRENT
        AMO.Model.currentSampleAlerts([]);
        AMO.Model.currentResultTypeOfAnalysis('');
        AMO.Model.currentResultAverageTOC('');
        AMO.Model.currentResultAverageTIC('');
        AMO.Model.currentResultPercentRSDTOC('');
        AMO.Model.currentResultReplicates([]);
        AMO.Model.currentSampleAlerts([]);
    }

    var getOverallStatus = function (tocaResult) {
        if (tocaResult == null) {
            return null;
        }
        //var tocTrendNominal = (tocaResult.Is_In_Family == 1);
        //var hydeResultNominal = false;
        //var amissResultNominal = false;

        var tocTrendNominal = null;
        var hydeResultNominal = null;
        var amissResultNominal = null;
        var statusList = [];

        if (tocaResult.Is_In_Family != null) {
            tocTrendNominal = (tocaResult.Is_In_Family == 1);
            statusList.push(tocTrendNominal);
        }

        // check if either AMISS or HyDE is Off-Nominal then report Off-Nominal....
        if (tocaResult.HyDE != null) {
            var hydeResult = tocaResult.HyDE.Results;
            hydeResultNominal = (hydeResult['Fault Detected'] == false);
            statusList.push(hydeResultNominal);
        } 
        if (tocaResult.AMISS != null && tocaResult.AMISS.Results != null && tocaResult.AMISS.Results.Data != null) {
            var amissResult = tocaResult.AMISS.Results;
            var tempData = $.grep(amissResult.Data, function (e) {
                return (AMO.Utils.StringContains(e.Assessment_Value, 'Out of Family'));
            });
            amissResultNominal = (tempData.length == 0);
            statusList.push(amissResultNominal);
        }
        var overallNominalStatus = null;
        if (statusList.length > 0) {
            overallNominalStatus = true;
            for (var i = 0; i < statusList.length; i++) {
                if (statusList[i] == false) {
                    overallNominalStatus = false;
                    break;
                }
            }
        }
        
        // return (tocTrendNominal && hydeResultNominal && amissResultNominal);
        return overallNominalStatus;
    };

    // private events...

    // setup/reveal public APIs
    var publicInterface = {

        AddTask: addTask,

        CancelRequestedTask: cancelRequestedTask,

        DictionaryDatasets: [],
        DictionaryMethods: [],

        GetOverallStatus: getOverallStatus,
        GetActualDirectoryList: getActualDirectoryList,
        GetProcedures: getProcedures,
        GetHardwareMessages: getHardwareMessages,
        GetSoftwareMessages: getSoftwareMessages,
        GetComponents: getComponents,
        GetStates: getStates,
        GetPlotDescriptions: getPlotDescriptions,
        GetVideos: getVideos,
        GetGlossary: getGlossary,
        GetHyDEMessages: getHyDEMessages,
        GetStatesColorCodes: getStatesColorCodes,
        GetTOCAResults: getTOCAResults,
        GetTasks: getTasks,
        GetTasksHistory: getTasksHistory,
        GenerateFaultIndicatorImage: generateFaultIndicatorImage,

        LoadTocaData: loadTocaData,

        ResetData: resetData,
        RecommendedProceduresData: null,
        ResetFeedback: resetFeedback,

        SearchTOCAReferences: searchTOCAReferences,
        SearchReferencesByContext: searchReferencesByContext,
        SendFeedback: sendFeedback,
        SetJsonFile: setJsonFile,
        ScheduleIfNewTimestamp: '',

        UpdateTaskCrewNote: updateTaskCrewNote,
        UpdateTaskStatus: updateTaskStatus,
        UpdateTaskModelAndView: updateTaskModelAndView,
        UpdateTocaSampleRunResults: updateTocaSampleRunResults
        
    }
    return publicInterface;
}();

AMO.SSC = function () {
    var self = this;

    var getSSCProcedures = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'SSCprocedures.json', function (data) {
            if (data != null) {
                var baseUrl = AMO.Data.SystemConfiguration[AMO.Data.SystemConfiguration.proc_url_root];
                // reconstruct the URL based on the configuration setting
                for (var idx = 0; idx < data.length; idx++) {
                    data[idx].URL = baseUrl + data[idx].URL;
                }

                var s1 = JSON.stringify(AMO.Data.SscProcedures);
                var s2 = JSON.stringify(data);

                if (s1 !== s2) {

                    AMO.Utils.WriteConsole('SSC Procedures changed');

                    AMO.Data.SscProcedures = data;

                    // ------------------------------------------------------------
                    // sort by name...
                    // AMO.Utils.SortArray(data, 'Name', false, true);
                    var cloneData = JSON.parse(JSON.stringify(AMO.Data.SscProcedures));
                    AMO.Utils.SortArray(cloneData, 'Name', false, true);
                    // ---------------------------------------------------------------
                    // initially update the ViewModel
                    AMO.Model.sscProcedures(cloneData);
                } else {
                    if (typeof callback === 'function') {
                        callback(data);
                    }
                }
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getSSCAlertMessages = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'SSCAlertMsgs.json', function (data) {

            // sort by name...
            AMO.Utils.SortArray(data, 'Name', false, true);

            AMO.Data.SscAlertMessages = data;

            AMO.Model.sscAlertMessages(AMO.Data.SscAlertMessages);

            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getSSCPlotDescriptions = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'SSCplotDescriptions.json', function (data) {

            // sort by name...
            AMO.Utils.SortArray(data, 'Name', false, true);

            AMO.Data.SscPlotDescriptions = data;

            AMO.Model.sscPlotDescriptions(AMO.Data.SscPlotDescriptions);

            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };
    var getSSCDefinitions = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'SSCdefinitions.json', function (data) {

            // sort by name...
            AMO.Utils.SortArray(data, 'Name', false, true);

            AMO.Data.SscDefinitions = data;

            AMO.Model.sscDefinitions(AMO.Data.SscDefinitions);

            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getSSCLocations = function (callback) {
        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeDataUIPath + 'ssc_locations.json', function (data) {
            if (data != null) {
                AMO.Data.SscLocations = data;
            } else {
                AMO.Data.SscLocations = [];
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });
    };

    var getVideos = function (callback) {

        AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeStaticJSONPath + 'SSCvideos.json', function (data) {
            if (data !== null) {
                // sort by name... 
                AMO.Utils.SortArray(data, 'ID', true, true);

                AMO.Data.SscVideos = data;
                // initially update the ViewModel
                AMO.Model.sscVideos(AMO.Data.SscVideos);
            }
            if (typeof callback === 'function') {
                callback(data);
            }
        });

    };

    var searchSSCReferences = function (textSearchList) {

        // clean-up text first ... e.g. regular expression escaping, etc.
        var tempArr = [];
        for (var idx = 0; idx < textSearchList.length; idx++) {
            var txt = $.trim(textSearchList[idx]); //AMO.Utils.EscapeRegExp($.trim(textSearchList[idx]));
            if (txt == '') continue;
            tempArr.push(txt);
            AMO.Utils.WriteConsole(txt);
        }
        textSearchList = tempArr;

        AMO.Data.CurrentSearchList = textSearchList;

        var cloneProcedures = JSON.parse(JSON.stringify(AMO.Data.SscProcedures));
        var cloneAlertMessages = JSON.parse(JSON.stringify(AMO.Data.SscAlertMessages));
        var clonePlotDescriptions = JSON.parse(JSON.stringify(AMO.Data.SscPlotDescriptions));
        var cloneDefinitions = JSON.parse(JSON.stringify(AMO.Data.SscDefinitions));
        var cloneSscVideos = JSON.parse(JSON.stringify(AMO.Data.SscVideos));

        if (textSearchList.length == 0) {
            AMO.Model.sscProcedures(cloneProcedures);
            AMO.Model.sscAlertMessages(cloneAlertMessages);
            AMO.Model.sscPlotDescriptions(clonePlotDescriptions);
            AMO.Model.sscDefinitions(cloneDefinitions);
            AMO.Model.sscVideos(cloneSscVideos);
        } else {
            function getSearchResult(cloneArray) {
                var retArray = [];
                for (var index = 0; index < cloneArray.length; index++) {
                    var item = cloneArray[index];
                    var addItem = false;
                    // uses AND operation instead of OR
                    // AND operation
                    for (var idx = 0; idx < textSearchList.length; idx++) {
                        var textSearch = $.trim(textSearchList[idx]);
                        if (textSearch == '') continue;
                        var itemName = AMO.Utils.HtmlDecode(item.Name);
                        if (AMO.Utils.StringContains(itemName, textSearch) == true) {
                            addItem = true;
                            // break;
                        } else {
                            addItem = false;
                            break;
                        }
                    }
                    if (addItem == true) {
                        retArray.push(item);
                    }

                    if (textSearchList.length > 0 && item.tags.length > 0 && addItem == false) {
                        for (var idx = 0; idx < textSearchList.length; idx++) {
                            var textSearch = $.trim(textSearchList[idx]);
                            if (textSearch == '') continue;

                            if (AMO.Utils.InArray(item.tags, textSearch, false, true)) {
                                addItem = true;
                                // break;
                            } else {
                                addItem = false;
                                break;
                            }
                        }
                        if (addItem == true) {
                            retArray.push(item);
                        }
                    }
                }
                return retArray;
            };

            var resultCloneProcedures = getSearchResult(cloneProcedures);
            var resultCloneAlertMessages = getSearchResult(cloneAlertMessages);
            var resultPlotDescriptions = getSearchResult(clonePlotDescriptions);
            var resultDefinitions = getSearchResult(cloneDefinitions);
            var resultVideos = getSearchResult(cloneSscVideos);

            AMO.Model.sscProcedures(resultCloneProcedures);
            AMO.Model.sscAlertMessages(resultCloneAlertMessages);
            AMO.Model.sscPlotDescriptions(resultPlotDescriptions);
            AMO.Model.sscDefinitions(resultDefinitions);
            AMO.Model.sscVideos(resultVideos);

            $('#divSscReferenceContent .iphone-list-nav a, #divSscReferenceContent .iphone-list-nav div').unhighlight();

            $('#divSscReferenceContent .iphone-list-nav a, #divSscReferenceContent .iphone-list-nav div').highlight(textSearchList);
        }
    };

    var sortSSCGrid = function (sortCriteria) {
        // initialize sort order for the SSC grid view...
        var sscs = AMO.Model.SSCHosts();
        var sortString = AMO.Utils.GetCookie("SSCGridSortOrder");
        if (typeof sortCriteria != 'undefined') {
            sortString = sortCriteria;
        }
        if (sortString == null) {
            sortString = 'nameSortOrder|true';
        }
        AMO.Utils.SetCookie("SSCGridSortOrder", sortString);

        var temp = sortString.split('|');
        var columnName = temp[0];
        var isAscending = (temp[1] == 'true');

        $('#ddlSSCSortField').val(columnName);
        var chkSSCSortFlag = $('#chkSSCSortFlag');
        chkSSCSortFlag.prop('checked', isAscending);
        
        if (columnName === 'locationSortOrder') {
            chkSSCSortFlag.next('span').text(isAscending === true ? 'Fwd to Aft' : 'Aft to Fwd');
        } else {
            chkSSCSortFlag.next('span').text(isAscending === true ? 'Ascending' : 'Descending');
        }
      
        AMO.Utils.SortArray(sscs, columnName, false, isAscending);
        AMO.Model.SSCHosts(sscs);
    };

    var sortSSCListAuto = function () {
        var self = this;
        var sortString = AMO.Utils.GetCookie("SSCGridSortOrder");
        self.SortSSCList(sortString);
    };

    var sortSSCList = function (sortCriteria) {
        // intialize sort order for the SSC list view - dropdown list
        var sscs = AMO.Model.SSCHostList();
        var sortString = AMO.Utils.GetCookie("SSCListSortOrder");
        if (typeof sortCriteria != 'undefined') {
            sortString = sortCriteria;
            AMO.Utils.SetCookie("SSCListSortOrder", sortString);
        }
        if (sortString === null) {
            sortString = 'nameSortOrder|true';
        }
        AMO.Utils.SetCookie("SSCListSortOrder", sortString);

        temp = sortString.split('|');
        columnName = temp[0];
        isAscending = (temp[1] === 'true');

        $('#divSscList th.ssc-sort-column').each(function () {
            var t = $(this);
            var text = t.attr('data-column-text');
            var colName = t.attr('data-column-name');
            if (colName === columnName) {
                text += (isAscending === true) ? ' ▲' : ' ▼';
            }
            t.text(text);
        });
        AMO.Utils.SortArray(sscs, columnName, false, isAscending);
        AMO.Model.SSCHostList(sscs);

        window.setTimeout(function () {
            AMO.UI.UpdateSSCPreviousNextButtons();
        }, 1000);
    };

    var getHostData = function (cb, initial) {
        var self = this;
        if (typeof initial === 'undefined') initial = false;

        // asynchronously call SSC procedures if there's any update...
        self.GetSSCProcedures();

        // get first SSC locations...
        self.GetSSCLocations(
            function () {
                // then get the Host file
                AMO.Data.GetJSONDataFromFile(AMO.Paths.RelativeSSCHostFile, function (data) {
                    if (typeof data != 'undefined' && $.isEmptyObject(data) == false) {

                        //var refresh = false;
                        //var changeCurrentSelectedSSC = false;

                        function synchronize(model, updateCurrentSSC) {
                            if (typeof updateCurrentSSC == 'undefined') updateCurrentSSC = false;
                            var found = false;
                            var name = '';
                            // check first each item in the existing array if they are valid...otherwise delete/remove
                            // remove if it does not exist from the newly retrieved data
                            var hosts = model(); //AMO.Model.SSCHosts();
                            for (var idx = 0; idx < hosts.length; idx++) {
                                name = hosts[idx].name();
                                found = false;
                                for (var sscName in data) {
                                    if (sscName === name) {
                                        found = true;
                                        break;
                                    }
                                }
                                if (found === false) {
                                    // remove....
                                    model.remove(hosts[idx]);
                                    //refresh = true;
                                    //changeCurrentSelectedSSC = (AMO.Model.currentSSCName() == name);
                                }

                                hosts[idx].selected(false);
                                if (AMO.Model.currentSSCName().length > 0 && AMO.Model.currentSSCName() === name) {
                                    hosts[idx].selected(true);
                                }
                            }

                            // add if it does not exist in the existing list (initial load)
                            var positionIndex = 0;
                            hosts = model(); // AMO.Model.SSCHosts();

                            for (var sscName in data) {
                                // do not include SSCs that are  listed in the exclusion list...
                                if ($.inArray(sscName, AMO.UI.SSCExclusionList) > -1) {
                                    continue;
                                }

                                // only SSC with names that contain 'SSC'
                                if (AMO.Utils.StringContains(sscName, 'SSC') == false) {
                                    continue;
                                }
                                var sscRawData = data[sscName];
                                var ssc = null;
                                found = false;
                                for (var idx = 0; idx < hosts.length; idx++) {
                                    name = hosts[idx].name();
                                    if (sscName === name) {
                                        found = true;
                                        ssc = hosts[idx];
                                        break;
                                    }
                                }
                                if (found === false) {
                                    // add...
                                    model.splice(positionIndex, 0, new AMO.SSCInfo(sscName, sscRawData, false, positionIndex));
                                    //refresh = true;
                                } else {
                                    // update...

                                    var statusDetailsChanged = (JSON.stringify(ssc.status_details()) != JSON.stringify(sscRawData.status_details));

                                    // ---------------------------------------------------------
                                    // update location name regardless...
                                    var sscLocation = AMO.Data.GetSSCLocationByName(ssc.name());
                                    var newLocationName = '';
                                    if (sscLocation !== null) {
                                        newLocationName = sscLocation.location_name;
                                    }
                                    if (newLocationName !== ssc.location_name()){
                                        ssc.location_name(newLocationName);
                                    }
                                    //------------------------------------------------------------------

                                    if (ssc != null &&
                                        (ssc.current_state() != sscRawData.state ||
                                        ssc.output() != sscRawData.output ||
                                        ssc.time() != sscRawData.time ||
                                        statusDetailsChanged === true)) {

                                        ssc.current_state(sscRawData.state);
                                        ssc.output(sscRawData.output);
                                        ssc.time(sscRawData.time);
                                        ssc.status_details(sscRawData.status_details);

                                        ssc.status_details_info(ssc.getStatusDetailsInfo(ssc.name(), sscRawData.status_details));

                                        if (AMO.Model.currentSSCName() == ssc.name() && updateCurrentSSC == true) {
                                            AMO.Model.currentSSCStatus(ssc.currentStateName());
                                            AMO.Model.currentSSCLocation(ssc.location_name());
                                            AMO.Model.currentSSCConnection(ssc.connection());
                                            AMO.Model.currentSSCUpdatetime(ssc.time());

                                            AMO.Model.currentSSCStatusDetails(ssc.status_details_info());

                                            // update recommended actions...
                                            AMO.UI.UpdateSSCRecommendedActions();
                                        }
                                    }
                                }
                                positionIndex++;
                            }
                        }

                        synchronize(AMO.Model.SSCHosts);
                        synchronize(AMO.Model.SSCHostList, true);

                        var tempCount;
                        tempCount = $.grep(AMO.Model.SSCHosts(), function (e) {
                            return (e.currentStateName() === AMO.Constants.SSCStatus.NOMINAL);
                        });
                        var nominalSSCCount = tempCount.length;

                        tempCount = $.grep(AMO.Model.SSCHosts(), function (e) {
                            return (e.currentStateName() === AMO.Constants.SSCStatus.OFFNOMINAL);
                        });
                        var offNominalSSCCount = tempCount.length;

                        tempCount = $.grep(AMO.Model.SSCHosts(), function (e) {
                            return (e.currentStateName() === AMO.Constants.SSCStatus.OFFLINE);
                        });
                        var offlineSSCCount = tempCount.length;

                        AMO.Model.SSCHostsNominalCount(nominalSSCCount);
                        AMO.Model.SSCHostsOffNominalCount(offNominalSSCCount);
                        AMO.Model.SSCHostsOfflineCount(offlineSSCCount);

                        if (AMO.Model.currentSSCName().length === 0) { // || refresh === true)

                            if (initial === true) {
                                // make the sort string in synch...
                                var sortString = AMO.Utils.GetCookie("SSCGridSortOrder");
                                if (sortString == null) {
                                    sortString = 'nameSortOrder|true';
                                    AMO.Utils.SetCookie("SSCGridSortOrder", sortString);
                                }
                                AMO.Utils.SetCookie("SSCListSortOrder", sortString);
                            }

                            self.SortSSCGrid();
                            self.SortSSCList();

                            if (AMO.Model.SSCHostList().length > 0) {
                                if (AMO.Model.currentSSCName().length === 0 || changeCurrentSelectedSSC === true) {

                                    AMO.Model.currentSSCName(AMO.Model.SSCHostList()[0].name());
                                    AMO.Model.currentSSCLocation(AMO.Model.SSCHostList()[0].location_name());
                                    AMO.Model.currentSSCConnection(AMO.Model.SSCHostList()[0].connection());
                                    AMO.Model.currentSSCUpdatetime(AMO.Model.SSCHostList()[0].time());

                                    AMO.Model.currentSSCStatus(AMO.Model.SSCHostList()[0].currentStateName());
                                    AMO.Model.currentSSCAlertHistoryURL(AMO.Model.SSCHostList()[0].alert_history_url);

                                    AMO.Model.SSCHostList()[0].selected(true);
                                    AMO.Model.currentSSCStatusDetails(AMO.Model.SSCHostList()[0].status_details_info());

                                    AMO.Model.SSCHosts()[0].selected(true);

                                    // update recommended actions...
                                    AMO.UI.UpdateSSCRecommendedActions();

                                }
                            }
                        }
                    } else {
                        data = null;
                    }
                    cb(data);
                });
            }
        );
 
    };

    var extractConnectionTypeData = function (rawData) {
        // sample output...
        //    "output": "OK - On wired network (MAC: SSC3 (192.168.60.23) at 00:1c:25:1e:11:9f [ether] on eth0)", 
        //    "output": "OK - On wireless network (MAC: SSC3 (192.168.60.23) at 00:1c:25:1e:11:9f [ether] on eth0)", 
        //    "output"" "??????????" both wired and wireless

        var s = rawData;
        var values = [];
        var outputValues = [];

        // IP Address...Latency: in milliseconds
        outputValues[AMO.Constants.SSCParameterKey.ARP] = { connection: '' };
        if (typeof s === 'string' && s.length > 0) {

            //var bothWiredWireless = AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[2].split('|');
            //if (AMO.Utils.StringContains(s, bothWiredWireless[0]) === true && AMO.Utils.StringContains(s, bothWiredWireless[1]) === true) {
            //    outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'both';
            //} else if (AMO.Utils.StringContains(s, AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[1]) === true) {
            //    outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'wireless';
            //} else if (AMO.Utils.StringContains(s, AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[0]) === true) {
            //    outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'wired';
            //}

            var bothPattern = new RegExp(AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[2], "gi"); // "OK|-|wired|wireless"
            var wirelessPattern = new RegExp(AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[1], "gi"); // "OK|-|wireless"
            var wiredPattern = new RegExp(AMO.Data.SystemConfiguration.amo_ui_ssc_network_connectivity_flags[0], "gi"); // "OK|-|wired"

            var bothPatternResult = s.match(bothPattern);
            var wirelessPatternResult = s.match(wirelessPattern);
            var wiredPatternResult = s.match(wiredPattern);

            if (bothPatternResult !== null && bothPatternResult.length === 4) {
                outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'both';
            } else if (wirelessPatternResult !== null && wirelessPatternResult.length === 3) {
                outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'wireless';
            } else if (wiredPatternResult !== null && wiredPatternResult.length === 3) {
                outputValues[AMO.Constants.SSCParameterKey.ARP].connection = 'wired';
            }
        }
        return outputValues;
    };

    var extractLatencyData = function (rawData) {
        // sample output..."PING OK - Packet loss = 0%, RTA = 0.83 ms"
        // [Ping] = { ip: 'xx.xx.xxx', latency: 120, nominal: true }
        var s = rawData;
        var values = [];
        var outputValues = [];

        // IP Address...Latency: in milliseconds
        outputValues[AMO.Constants.SSCParameterKey.Latency] = { latency: -1, isNominal: null };
        if (typeof s == 'string' && s.length > 0) {
            values = s.match(/\d+(\.\d*) ms/g);
            if (values != null && values.length > 0) {
                // latency
                outputValues[AMO.Constants.SSCParameterKey.Latency].latency = parseFloat(values[0]);

                // check threshold...
                if (outputValues[AMO.Constants.SSCParameterKey.Latency].latency >= AMO.Constants.SSCAlertThreshold.LatencyMilliseconds) {
                    outputValues[AMO.Constants.SSCParameterKey.Latency].isNominal = false;
                }
            }
        }
        return outputValues;
    };

    var extractUptimeData = function (rawData) {
        // sample output
        // [UpTime] = { days: 0, hours: 0, minutes: 0, totalInMinutes: 0, nominal: true };

        var s = rawData;
        var values = [];
        var outputValues = [];

        outputValues[AMO.Constants.SSCParameterKey.Uptime] = { days: -1, hours: -1, minutes: -1, totalInMinutes: -1, isNominal: null };
        if (typeof s == 'string' && s.length > 0) {
            values = s.match(/\d+/g);
            if (values != null && values.length > 2) {
                outputValues[AMO.Constants.SSCParameterKey.Uptime].days = parseInt(values[0]);
                outputValues[AMO.Constants.SSCParameterKey.Uptime].hours = parseInt(values[1]);
                outputValues[AMO.Constants.SSCParameterKey.Uptime].minutes = parseInt(values[2]);

                var totalInMinutes = (outputValues[AMO.Constants.SSCParameterKey.Uptime].days * 24 * 60) +
                                     (outputValues[AMO.Constants.SSCParameterKey.Uptime].hours * 60) +
                                     (outputValues[AMO.Constants.SSCParameterKey.Uptime].minutes);

                outputValues[AMO.Constants.SSCParameterKey.Uptime].totalInMinutes = totalInMinutes;

                // check threshold...
                if (totalInMinutes >= AMO.Constants.SSCAlertThreshold.UptimeElapsedTimeMinutes) {
                    outputValues[AMO.Constants.SSCParameterKey.Uptime].isNominal = false;
                } else {
                    outputValues[AMO.Constants.SSCParameterKey.Uptime].isNominal = true;
                }
            }
        }
        return outputValues;
    };

    var extractUsageData = function (key, rawData) {
        // sample output
        // [Used] = { type: key, value: -1, isNominal: true, timeInMinutes: 0 };
        // [Free] = { type: key, value: -1, isNominal: true, timeInMinutes: 0 };
        // [Bytes] = { type: key, value: -1, isNominal: true, timeInMinutes: 0 };

        var s = rawData;
        var values = [];
        var outputValues = [];

        key = $.trim(key.replace('Usage', ''));

        outputValues['Used'] = { type: key, value: -1, isNominal: true, timeInMinutes: 0 };
        outputValues['Free'] = { type: key, value: -1, isNominal: true, timeInMinutes: 0 };
        outputValues['Bytes'] = { total: 0, free: 0, used: 0, unit: 'Mb', isNominal: true };

        if (typeof s == 'string' && s.length > 0) {

            // values = s.match(/\d+%/g);
            values = s.match(/\d+(|\.\d*|)%/g);

            if (values != null && values.length > 0) {
                if ((key == 'Memory' || key == 'Disk Space') &&
                     values != null &&
                     values.length == 2) {
                    outputValues['Used'].value = Math.round(parseFloat(values[0]));
                    outputValues['Free'].value = Math.round(parseFloat(values[1]));
                } else if (key == 'CPU') {
                    outputValues['Used'].value = Math.round(parseFloat(values[0]));
                    outputValues['Free'].value = 100 - outputValues['Used'].value;

                    values = s.match(/\d+ min/g);
                    if (values != null && values.length > 0) {
                        // outputValues['CPU_ElapsedTimeMinutes'] = parseInt(values[0]);
                        outputValues['Used'].timeInMinutes = parseInt(values[0]);
                        outputValues['Free'].timeInMinutes = parseInt(values[0]);
                    }
                }
            }

            // get the bytes info....Memory: Mb (Megabytes); Disk Space: Gb (Gigabytes)
            values = s.match(/\d+(\.\d*) Mb/g);
            if (values != null && values.length > 2) {
                outputValues['Bytes'].total = parseFloat(values[0]);
                outputValues['Bytes'].used = parseFloat(values[1]);
                outputValues['Bytes'].free = parseFloat(values[2]);
                if (key == 'Memory') {
                    outputValues['Bytes'].unit = 'Mb';
                } else if (key == 'Disk Space') {
                    outputValues['Bytes'].unit = 'Gb';
                }
            }

            // check threshold...
            if (key == 'CPU') {
                //if (outputValues['Used'].value >= AMO.Constants.SSCAlertThreshold.CPUUsagePercent &&
                 //   outputValues['Used'].timeInMinutes > AMO.Constants.SSCAlertThreshold.CPUUsageElapsedTimeMinutes) {
                if (outputValues['Used'].value >= AMO.Constants.SSCAlertThreshold.CPUUsagePercent) {
                    outputValues['Used'].isNominal = false;
                }
            } else if (key == 'Memory') {
                // outputValues['Bytes'] = { total: 0, free: 0, used: 0, unit: 'Mb' };
                //if ((outputValues['Bytes'].used / 1000) > AMO.Constants.SSCAlertThreshold.RAMUsageGig) {
                //    outputValues['Bytes'].isNominal = false;
                //}
                if (outputValues['Used'].value > AMO.Constants.SSCAlertThreshold.RAMUsagePercent) {
                    outputValues['Used'].isNominal = false;
                }
            } else if (key == 'Disk Space') {
                // outputValues['Used'].value
                // if (outputValues['Free'].value != -1 && outputValues['Free'].value < AMO.Constants.SSCAlertThreshold.HDDFreePercent) 
                if (outputValues['Used'].value != -1 && outputValues['Used'].value > AMO.Constants.SSCAlertThreshold.HDDUsagePercent) {
                    outputValues['Used'].isNominal = false;
                }
            }
        }
        return outputValues;
    };

    var extractTemperatureData = function (key, rawData) {
        // sample output
        // outputValues['Used'] = { type: isHDD ? 'HDD' : 'CPU', value: -1, isNominal: true };
        // outputValues['Free'] = { type: isHDD ? 'HDD' : 'CPU', value: -1, isNominal: true };

        var s = rawData;
        var values = [];
        var outputValues = [];

        //key = $.trim(key.replace('Temperature', ''));
        //key = $.trim(key.replace('Temp', ''));

        //var isHDD = AMO.Utils.StringContains(key, "HDD") ||
        //            AMO.Utils.StringContains(key, "Hard Drive");
        var isHDD = AMO.Utils.StringContains(key, AMO.Constants.SSCParameterKey.HDDTemperature);

        outputValues['Used'] = { type: isHDD ? 'HDD' : 'CPU', value: -1, isNominal: true };
        outputValues['Free'] = { type: isHDD ? 'HDD' : 'CPU', value: -1, isNominal: true };

        // Sample values..
        // "output": "Value=49", 
        var temperature = parseInt(s);
        if (typeof s == 'string' && s.length > 0) {
            values = s.split('=');
            if (values != null && values.length > 1) {
                temperature = parseInt(values[1]);
            }
        }

        if (isNaN(temperature) == true) {
            temperature = -1;
        }

        outputValues['Used'].value = temperature;
        // set the 'Free' just like 'Used' -- so NO_DATA will be flagged correctly...
        outputValues['Free'].value = outputValues['Used'].value;

        // check threshold...
        if (AMO.Utils.StringContains(key, AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
            AMO.Utils.StringContains(key, AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) {
            if (outputValues['Used'].value > AMO.Constants.SSCAlertThreshold.CPUTempCelsius) {
                outputValues['Used'].isNominal = false;
            }
        } else if (key == AMO.Constants.SSCParameterKey.HDDTemperature) {
            if (outputValues['Used'].value > AMO.Constants.SSCAlertThreshold.HDDTempCelsius) {
                outputValues['Used'].isNominal = false;
            }
        }

        outputValues['Free'].isNominal = outputValues['Used'].isNominal;

        return outputValues;
    };

    var publicInterface = {
        ExtractConnectionTypeData: extractConnectionTypeData,
        ExtractLatencyData: extractLatencyData,
        ExtractUptimeData: extractUptimeData,
        ExtractUsageData: extractUsageData,
        ExtractTemperatureData: extractTemperatureData,

        GetSSCProcedures: getSSCProcedures,
        GetSSCAlertMessages: getSSCAlertMessages,

        GetSSCPlotDescriptions: getSSCPlotDescriptions,
        GetSSCDefinitions: getSSCDefinitions,

        GetVideos: getVideos,

        GetHostData: getHostData,
    
        GetSSCLocations: getSSCLocations,

        SearchSSCReferences: searchSSCReferences,

        SortSSCGrid: sortSSCGrid,
        SortSSCList: sortSSCList,
        SortSSCListAuto: sortSSCListAuto
    };

    return publicInterface;
}();


// --------- APIs ------------------------------------------------------------------------
// AMO APIs
AMO.MonitorStatusAjax = null;
AMO.MonitorStatusTimerId = null;
AMO.MonitorStatusInitialLoad = true;
AMO.ConnectionLost = false;

AMO.MonitorStatus = function () {
    var ajaxDone = function (data, textStatus, jqXHR) {

        if (data === null || $.isEmptyObject(data) === true) {

            if (AMO.ConnectionLost === false) {
                //if (AMO.MonitorStatusTimerId !== null) {
                //    window.clearInterval(AMO.MonitorStatusTimerId);
                //}
                AMO.ConnectionLost = true;

                // connection to the server was lost...
                AMO.UI.AlertBox('Oops! Connection to the server was lost. <br />Please hit the <b>"Ok"</b> button to re-establish connection.', '', function () {
                    // reloads the page...
                    AMO.UI.RefreshPage();
                }, 'Connection');
            }

            AMO.Utils.WriteConsole('Oops! Connection to the server was lost.');

            // this is for TOCA
            AMO.Model.currentTOCASample('');
            AMO.Model.lastTOCASample('');
            AMO.CurrentState.RawStateData = null;
            AMO.Model.noTOCAFilesAvailable(true);

            //// this is for SCHEDULER/PLAN INPUT
            //AMO.Model.tocaCurrentWeekStartDate('');
            //AMO.Model.tocaNextWeekStartDate('');
            //AMO.Model.tocaFutureWeekStartDate('');

            //AMO.Model.tocaCurrentWeekSchedule([]);
            //AMO.Model.tocaNextWeekSchedule([]);
            //AMO.Model.tocaFutureWeekSchedule([]);

            AMO.ConnectionLost = true;

            return;
        }
        
        if (AMO.ConnectionLost === true) {
            AMO.ConnectionLost = false;
            AMO.UI.HideDialog(false);
            AMO.UI.RefreshPage();
            return;
        }

        if (AMO.MonitorStatusInitialLoad === false) {
            if (AMO.CurrentState.HasStateChanged(data) === false) {
                // just return no further processing...
                AMO.Utils.WriteConsole('no state changed');
                return;
            }
        }

        AMO.Utils.WriteConsole('state changed');

        // Set the current state...
        AMO.CurrentState.SetState(data);

        // intial load....
        function initialLoad() {
            if (AMO.MonitorStatusInitialLoad == true) {
                AMO.Model.selectedToolMenuId(-1);
                window.setTimeout(function () {
                    var hashValue = AMO.UI.InitialAppRoute;
                    if (hashValue.length > 0) {
                        // AMO.UI.SetAppHashRoute(hashValue, false);
                        AMO.UI.FlowControl([
                        function (cb) {
                            AMO.UI.SetAppHashRoute(hashValue, false);
                            cb();
                        }
                        ], function () {
                            AMO.UI.SetAppHashRoute(hashValue, true, false);
                        });
                    }
                }, 100);
                AMO.UI.HideProgress();
            }
            AMO.MonitorStatusInitialLoad = false;
        }

        // check if there's toca files available....
        if (AMO.CurrentState.LastWorkingFolder() === '' ||
            AMO.CurrentState.AllFinishedJobs.length === 0) {
            AMO.Model.currentTOCASample('');
            AMO.Model.lastTOCASample('');
            AMO.Model.noTOCAFilesAvailable(true);

            initialLoad();
            return;
        }

        if (AMO.MonitorStatusInitialLoad === false &&
            AMO.Model.noTOCAFilesAvailable() === true &&
            AMO.Model.selectedTocaTabId() === 1) {
            AMO.Model.currentTOCASample('');
            AMO.Model.lastTOCASample('');
            AMO.Model.selectTocaTabIndex(0);

            initialLoad();
            //return;
        }
        AMO.Model.noTOCAFilesAvailable(false);

        var loadTOCA = false;
        var loadLastTOCA = false;
        var currentTocaSample = '';

        // var currentTocaDate = '';
        if (AMO.Model.currentTOCASample() == '') {
            currentTocaSample = AMO.CurrentState.LastFinishedJob.name;
            // currentTocaDate = AMO.Utils.FormatAMODateTime2(AMO.CurrentState.LastFinishedJob.time);

            AMO.Model.currentTOCASample(currentTocaSample);
            loadTOCA = true;
        }

        if (AMO.Model.lastTOCASample() != AMO.CurrentState.LastFinishedJob.name) {
            AMO.Model.lastTOCASample(AMO.CurrentState.LastFinishedJob.name);
            loadLastTOCA = true;
        }

        // refresh toca sample runs list...
        function refreshTOCASampleDropDownList() {
            var tocaDirectoryItems = [];
            for (var key in AMO.CurrentState.AllFinishedJobs) {
                var job = AMO.CurrentState.AllFinishedJobs[key];
                if (job.hasOwnProperty('name')) {
                    var selected = (job.name == AMO.Model.currentTOCASample());
                    var tocaToolsMenuItem = new AMO.TocaToolsMenu(job.name, job.error, selected, job.time);
                    tocaDirectoryItems.push(tocaToolsMenuItem);
                }
            }

            var sortString = AMO.Utils.GetCookie("TOCASampleRunListSortOrder");
            if (sortString === null) {
                sortString = 'time|false';
            }
            var temp = sortString.split('|');
            var columnName = temp[0];
            var isAscending = (temp[1] === 'true');

            $('#divTocaRunList th.toca-sample-sort-column').each(function () {
                var t = $(this);
                var text = t.attr('data-column-text');
                var colName = t.attr('data-column-name');
                if (colName === columnName) {
                    text += (isAscending === true) ? ' ▲' : ' ▼';
                }
                t.text(text);
            });

            AMO.Utils.SortArray(tocaDirectoryItems, columnName, false, isAscending);
            AMO.Model.tocaDirectoryList(tocaDirectoryItems);

            window.setTimeout(function () { AMO.UI.UpdateSampleRunPreviousNextButtons(); }, 1000);
        }

        if (loadTOCA === true) {
            // now load TOCA data
            AMO.TOCA.LoadTocaData(function () {

                // Update the current toca sample....
                AMO.Model.currentTOCASample(''); // do this to refresh the ko computed functions related to currentTOCASample
                AMO.Model.currentTOCASample(currentTocaSample);

                // Last TOCA sample is the same as the current TOCA sample
                AMO.TOCA.UpdateTocaSampleRunResults(false); // true=Current/Selected TOCA run; false=Last/Recent TOCA run
                AMO.Model.lastTOCASample('');
                AMO.Model.lastTOCASample(currentTocaSample);
                // AMO.Model.currentTOCARunDate(currentTocaDate); TODO:CLEANUP

                // refresh the sample drop down list...
                refreshTOCASampleDropDownList();

                initialLoad();
            });
        } else {
            // before the refreshing the drop down list.... get the new results.json...
            AMO.TOCA.GetTOCAResults(function () {

                // Update last TOCA sample all the time...
                if (loadLastTOCA == true) {
                    AMO.Model.lastTOCASample(''); // do this to refresh the ko computed functions related to currentTOCASample
                    AMO.Model.lastTOCASample(AMO.CurrentState.LastFinishedJob.name);
                    AMO.TOCA.UpdateTocaSampleRunResults(false); // true=Current/Selected TOCA run; false=Last/Recent TOCA run
                }
                refreshTOCASampleDropDownList();
            });
        }
    };

    var ajaxFail = function (jqXHR, textStatus, errorThrown, failCallback) {
        // AMO.MonitorStatusTimerId = null;
        AMO.Utils.WriteConsole('AMO.MonitorStatus() - fail : ' + '[STATUS: ' + jqXHR.status + '-' + jqXHR.statusText + '] [TIME: ' + AMO.Utils.GetDateTicks() + ']');
        AMO.Model.currentTOCASample('');
        AMO.Model.lastTOCASample('');
        AMO.CurrentState.RawStateData = null;
        AMO.Model.noTOCAFilesAvailable(true);

        if (AMO.MonitorStatusInitialLoad === true) {
            AMO.Model.selectedToolMenuId(-1);
            window.setTimeout(function () {
                var hashValue = GetLocationHash();
                if (hashValue) {
                    AMO.UI.SetAppHashRoute(hashValue, false);
                }
            }, 100);
            AMO.UI.HideProgress();
        }
        AMO.MonitorStatusInitialLoad = false;

        if (jqXHR.status === 404 && AMO.Data.IsServerConnnectionAvailable() === false) {
            
            if (AMO.ConnectionLost === false) {
                //if (AMO.MonitorStatusTimerId !== null) {
                //    window.clearInterval(AMO.MonitorStatusTimerId);
                //}
                // connection to the server was lost...
                AMO.UI.AlertBox('Oops! Connection to the server was lost. <br />Please hit the <b>"Ok"</b> button to re-establish connection.', '', function () {
                    // reloads the page...
                    AMO.UI.RefreshPage();
                }, 'Connection');
            }

            AMO.Utils.WriteConsole('Oops! Connection to the server was lost.');

            AMO.ConnectionLost = true;
        }
  
    };

    AMO.MonitorStatusTimerId = window.setInterval(function () {
        AMO.Utils.WriteConsole('AMO.MonitorStatus() - log : ' + AMO.Utils.GetDateTicks());
        AMO.MonitorStatusAjax = AMO.AjaxManager.ajax(AMO.Paths.RelativeStateFile, null, ajaxDone, ajaxFail, { type: 'get' });

        // call TOCA procedures if there's any updates...
        AMO.TOCA.GetProcedures();

    }, AMO.UI.Interval);
};

AMO.GenericTimerId = null;
AMO.MonitorScheduleHalt = false;
AMO.MonitorScheduleTimerId = null;

AMO.MonitorSchedule = function () {

    AMO.MonitorScheduleTimerId = window.setInterval(function () {

        if (AMO.MonitorScheduleHalt == true) return;

        AMO.Utils.WriteConsole('AMO.MonitorSchedule() - log : ' + AMO.Utils.GetDateTicks());
        AMO.TOCA.GetTasks(true, function (data) {
            if (data != null) { // meaning a new set of schedule is available...
                // update Tasks History
                AMO.TOCA.GetTasksHistory(function () {
                    // done...
                });
            }
        });
    }, AMO.UI.IntervalSchedule);
};

AMO.MonitorSSCTimerId = null;
AMO.MonitorSSC = function () {

    AMO.MonitorSSCTimerId = window.setInterval(function () {

        AMO.Utils.WriteConsole('AMO.MonitorSSC() - log : ' + AMO.Utils.GetDateTicks());
        AMO.SSC.GetHostData(function (data) {
            if (data === null) {

                AMO.Model.currentSSCName('');

                AMO.Model.SSCHosts([]);
                AMO.Model.SSCHostList([]);

                AMO.Model.SSCHostsNominalCount(0);
                AMO.Model.SSCHostsOffNominalCount(0);
                AMO.Model.SSCHostsOfflineCount(0);

                // force selected tab to 0 (first tab)
                if (AMO.Model.selectedSscTabId() === 1 || AMO.Model.selectedSscTabId() === 2) {
                    AMO.Model.selectSscTabById(0);
                    AMO.UI.ResetGraphUISSC();
                }
            }
        });

        var sscAlertJSONURL = AMO.Model.currentSSCAlertHistoryURL();
        if (sscAlertJSONURL.length > 0) {
            if (AMO.Model.selectedSscTabId() === 1) {
                AMO.UI.ResizeSSCRightPanel();
            }
            AMO.Model.currentSSCAlertHistoryURL('');
            AMO.Model.currentSSCAlertHistoryURL(sscAlertJSONURL);
        }

    }, AMO.UI.IntervalSSC);
};
// -----------------------------------------------------------------------------------------

// ----------- FRAMEWORK --------------------------------------------------------------
// AMO Ajax Manager
AMO.AjaxManager = function(options) {
    var ajaxOptions = $.extend({}, options, {
        url: "",
        encoding: "UTF-8",
        type: "post",
        dataType: "json",
        data: {},
        cache: false
    });
    //contentType: "charset=UTF-8",
    // $.ajax(ajaxOptions);

    var ajaxSetupOptions = function(options) {
        return $.extend({}, options, ajaxOptions);
    };

    function ajaxDone(data, textStatus, jqXHR, doneCallback) {
        if (typeof (doneCallback) != 'undefined') {
            doneCallback(data, textStatus, jqXHR);
            return;
        }

        // perform more stuff if needed...
    };

    function ajaxFail(jqXHR, textStatus, errorThrown, failCallback) {
        if (typeof (failCallback) != 'undefined') {
            failCallback(jqXHR, textStatus, errorThrown);
            return;
        }
        AMO.Utils.WriteConsole("AMO.AjaxManager.ajaxFail() " + textStatus);

        // alert('ajaxFail - ' + textStatus);
        // perform more stuff if needed...
    };

    function ajaxAlways(dataOrXHR, textStatus, jqXHROrErrorThrown) {

    };

    //jqXHR.done(function(data, textStatus, jqXHR) {});
    //An alternative construct to the success callback option, the .done() method replaces the deprecated jqXHR.success() method. Refer to deferred.done() for implementation details.

    //jqXHR.fail(function(jqXHR, textStatus, errorThrown) {});
    //An alternative construct to the error callback option, the .fail() method replaces the deprecated .error() method. Refer to deferred.fail() for implementation details.

    //jqXHR.always(function(data|jqXHR, textStatus, jqXHR|errorThrown) { });
    //An alternative construct to the complete callback option, the .always() method replaces the deprecated .complete() method.

    //In response to a successful request, the function's arguments are the same as those of .done(): data, textStatus, and the jqXHR object. For failed requests the arguments are the same as those of .fail(): the jqXHR object, textStatus, and errorThrown. Refer to deferred.always() for implementation details.

    function send(url, data, doneCallback, failCallback) {
        url = AMO.Paths.RelativeCGIScriptsPath + url;
        return send2(url, data, doneCallback, failCallback);
    };

    function send2(fullUrl, data, doneCallback, failCallback) {

        if (typeof data === 'undefined') data = {};

        ajaxOptions.url = fullUrl;
        ajaxOptions.data = data;

        var ajx = $.ajax(ajaxOptions).done(function (data, textStatus, jqXHR) {
            ajaxDone(data, textStatus, jqXHR, doneCallback);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            ajaxFail(jqXHR, textStatus, errorThrown, failCallback);
        }).always(ajaxAlways);

        return ajx;
    };

    function ajax(url, data, doneCallback, failCallback, options) {

        var opts = $.extend({}, ajaxOptions, options);

        // url = AMO.Utils.GetNoCacheUrl(url);

        if (typeof data === 'undefined') data = {};

        opts.url = url;
        opts.data = data;

        var ajx = $.ajax(opts).done(function (data, textStatus, jqXHR) {
            ajaxDone(data, textStatus, jqXHR, doneCallback);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            ajaxFail(jqXHR, textStatus, errorThrown, failCallback);
        }).always(ajaxAlways);

        return ajx;
    };

    var publicObj = {
        send: send,
        send2: send2,
        ajax: ajax,
        ajaxSetupOptions: ajaxSetupOptions
    };

    return publicObj;
}();

// AMO Models

// Tools Menu
AMO.ToolsMenu = function(id, menuName, cssName, selected)
{
	var self = this;
	this.id = id;
	this.menuName = menuName;
	this.cssName = cssName;
	this.selected = ko.observable(selected);

	this.cssNameSelected = ko.computed(function () {
	    var css = self.cssName + (self.selected() ? ' selected' : '')
	    return css;
	}, this);
	this.cssTextNameSelected = ko.computed(function () { return self.selected() ? ' selected text-shadow' : 'bold' }, this);
}

AMO.TocaToolsMenu = function (workingDirectory, errorNo, selected, time) {
    var self = this;
    this.workingDirectory = workingDirectory;
    
    var sampleId = AMO.Utils.ExtractSampleIdFromWorkingDirectory(workingDirectory);
    this.sampleId = sampleId;
    this.sampleName = AMO.Utils.ExtractSampleNameFromWorkingDirectory(workingDirectory);
    this.sampleNumber = AMO.Utils.ExtractSampleNumberFromWorkingDirectory(workingDirectory);

    this.time = AMO.Utils.ExtractDateTimeFromWorkingDirectory(workingDirectory); // AMO.Utils.FormatAMODayAndTime(AMO.Utils.ExtractDateTimeFromWorkingDirectory(workingDirectory));
    this.isNominal = null;
    this.analysisType = 'n/a';
    this.analysisTypeDesc = '';

    var tocaResult = AMO.Data.GetTOCAResultBySample(workingDirectory); //AMO.Data.GetTOCAResultBySample(sampleId);
    if (tocaResult != null) {
        // commented use the toca sample run date/time
        // this.time = new Date(tocaResult.TOCA_Run_Timestamp);
        this.isNominal = AMO.TOCA.GetOverallStatus(tocaResult);
        this.analysisType = tocaResult.Sample_Type == null ? 'n/a' : tocaResult.Sample_Type;
        this.analysisTypeDesc = tocaResult.Sample_Type_Desc;
    }

    // this.menuName = menuName;
    this.errorNo = errorNo;
    this.selected = ko.observable(selected);
    // commented use the toca sample run date/time
    //this.time = time;
    this.isInProgress = ko.observable(false);
    this.isBrokenLink = false;
    this.metaText = '';
}

// TOCA tabs
AMO.Tabs = function(id, tabName, selected)
{
	this.id = id;
	this.tabName = tabName;
	this.selected = ko.observable(selected);
}

AMO.Plot = function (id, plotName, plotType, selected)
{
    if (typeof selected == 'undefined') {
        selected = false;        
    }
    this.id = id;
    this.plotName = plotName;
    this.plotType = plotType;
    this.selected = ko.observable(selected);
}

AMO.PlotExportOption = function (name, mimeType)
{
    this.name = name;
    this.mimeType = mimeType;
}

// TOCA panels
AMO.Panels = function(id, panelName, selected, lastId)
{
	var self = this;
	this.id = id;
	this.panelName = panelName;
	this.selected = ko.observable(selected);
	this.cssNameSelected = ko.computed(function() { return self.selected() ? " amo-sprites down-arrow" : " amo-sprites right-arrow" }, this);
	this.cssAccordionHeader = (this.id == lastId) ? "accordion-header accordion-header-last" : "accordion-header";
}

AMO.Task = function (week_start_date, taskObject) {
    var self = this;
    // sample structure of the schedule/task 
    //     {"due_date": "062", "procedure": "2.6.790", "status": AMO.Constants.TaskStatus.SCHEDULED, "task_name": "PWD Sampling Hot"}
    
    // var today = moment(new Date());

    var currentWeek = moment(week_start_date, 'YYYY_DDDD');

    this.week_start_date = week_start_date;
    this.due_date = taskObject.date_due; // "2012_287_06:20"
    this.date_performed = taskObject.date_performed; // "2012/10/13 06:20:28"
    this.procedure = taskObject.id;
    this.priority = taskObject.priority;
    this.task_name = taskObject.procedure;
    this.status = ko.observable(taskObject.status);
    this.crew_note = ko.observable(taskObject.crew_note == null ?  '' : taskObject.crew_note); 
    this.uuid = taskObject.uuid == null ? '' : taskObject.uuid;

    this.due_day = ko.computed(function () {
        var dueDate = moment(this.due_date, 'YYYY_DDDD_hh:mm');
        return dueDate.dayOfYear();
    }, this);

    this.is_past_due = ko.computed(function () {
        var today = moment(new Date());
        var dueDate = moment(this.due_date, 'YYYY_DDDD_hh:mm');
        var ret = dueDate.dayOfYear() < today.dayOfYear();
        if (today.year() > currentWeek.year()) {
            ret = false;
        } 
        return ret;
    }, this);

    this.status_text = ko.computed(function () {
        return AMO.Utils.TranslateTaskStatus(self.status());
    }, this);

    this.button_complete_visible = ko.computed(function () {
        var retVal = false;
        switch (self.status()) {
            case AMO.Constants.TaskStatus.SCHEDULED:
            case AMO.Constants.TaskStatus.REQUESTED:
                retVal = true;
                break;
            default:
                retVal = false;
                break;
        }
        return retVal;
    }, this);

    this.button_aborted_visible = ko.computed(function () {
        var retVal = false;
        switch (self.status()) {
            case AMO.Constants.TaskStatus.SCHEDULED:
            case AMO.Constants.TaskStatus.REQUESTED:
                retVal = true;
                break;
            default:
                retVal = false;
                break;
        }
        return retVal;
    }, this);

    this.button_schedulerequest_visible = ko.computed(function () {
        var retVal = false;
        switch (self.status()) {
            case AMO.Constants.TaskStatus.RECOMMENDED:
                retVal = true;
                break;
            default:
                retVal = false;
                break;
        }
        return retVal;
    }, this);

    this.button_cancelrequest_visible = ko.computed(function () {
        var retVal = false;
        switch (self.status()) {
            case AMO.Constants.TaskStatus.REQUESTED:
                retVal = true;
                break;
            default:
                retVal = false;
                break;
        }
        return retVal;
    }, this);

    this.status_css = ko.computed(function () {
        return AMO.Utils.GetTaskStatusCss(self.status()); 
    }, this);
}

AMO.SSCInfo = function (name, sscRawData, selected, positionIndex) {
    var self = this;
    if (typeof selected == 'undefined') {
        selected = false;
    }

    this.getStatusDetailsInfo = function (sscName, statusDetails) {
        var sourceStatusDetails = statusDetails;

        var statusDetailsInfoList = [];

        for (var key in sourceStatusDetails) {
            var sscStatusName = key;
            var sscStatusOutput = sourceStatusDetails[key].output;
            var sscStatusUpdateTime = sourceStatusDetails[key].time;
            // TODO:NEW DS
            // var sscStatusObjectId = sourceStatusDetails[key].object_id;

            var sscStatusObject = new AMO.SSCStatusDetailInfo(sscName,
                                                              sscStatusName,
                                                              sscStatusOutput,
                                                              sscStatusUpdateTime);

            statusDetailsInfoList.push(sscStatusObject);

        }

        // AMO.Utils.SortArray(statusDetailsInfoList, 'status_name', true, true);
        AMO.Utils.SortArray(statusDetailsInfoList, 'ui_sort_order', true, true);
        
        return statusDetailsInfoList;
    };

    // this.object_id = sscRawData.object_id;

    this.name = ko.observable(name);
    this.current_state = ko.observable(sscRawData.state);
    this.output = ko.observable(sscRawData.output);
    this.time = ko.observable(sscRawData.time);
    this.status_details = ko.observable(sscRawData.status_details);
    this.status_details_info = ko.observableArray(this.getStatusDetailsInfo(name, sscRawData.status_details));

    var sscLocation = AMO.Data.GetSSCLocationByName(name);
    if (sscLocation !== null) {
        this.location_name = ko.observable(sscLocation.location_name);
    } else {
        this.location_name = ko.observable('');
    }

    this.base_data_url = '../data/ssc/' + name;
    this.alert_history_url = this.base_data_url + '/alert.json';

    this.selected = ko.observable(selected);
    this.isInProgress = ko.observable(false);
    
    this.nameSortOrder = ko.computed(function () {
        var n = self.name();
        var sortOrder = 0;
        var num = n.match(/\d+/g);
        if (num != null && num.length > 0) {
            sortOrder = parseInt(num[0]);
        }
        return sortOrder;
    }, this);

    this.locationSortOrder = ko.computed(function () {
        var sortOrder = '';
        var nameOrder = self.nameSortOrder();
        var location = self.location_name();
        var sscLocations = AMO.Data.SystemConfiguration.amo_ui_ssc_locations;
        if (typeof sscLocations === 'undefined') sscLocations = [];

        var index = sscLocations.length + 1;
        if (location.length > 0) {
            for (var idx = 0; idx < sscLocations.length; idx++) {
                if (sscLocations[idx].toLowerCase() === location.toLowerCase()) {
                    index = idx;
                    break;
                }
            }
        } else {
            index += 1;
        }
        
        sortOrder = AMO.Utils.StringPadding(index, 4) + '-' + AMO.Utils.StringPadding(nameOrder, 3);
        return sortOrder;
    }, this);

    this.nameWithLocation = ko.computed(function () {
        var fullname = self.name();
        if (self.location_name().length > 0) {
            fullname += ' - ' + self.location_name();
        }
        return fullname;
    }, this);

    this.currentStateName = ko.computed(function () {
        var stateName = AMO.Constants.SSCStatus.OFFLINE;
        // self.current_state() == 1 or 2 - Unreachable / offline
        if (self.current_state() == 0) {
            // could be either Nominal or Off-Nominal
            stateName = AMO.Constants.SSCStatus.NOMINAL;
            var infoList = self.status_details_info();
            for (var key in infoList) {
                var info = infoList[key];
                if (info.recommendation_flag === true) {
                    stateName = AMO.Constants.SSCStatus.OFFNOMINAL;
                } 
                
                // if one of the parameters has no DATA then set SSC to OFFLINE...
                if (info.no_data === true) {
                    stateName = AMO.Constants.SSCStatus.OFFLINE;
                    break;
                }

                // check if there's no connection (not wired nor wireless)
                var connection = info.status_output_values()['ARP'];
                if (typeof connection !== 'undefined') {
                    if ($.isEmptyObject(connection.connection) === true) {
                        stateName = AMO.Constants.SSCStatus.OFFLINE;
                        break;
                    }
                }

            }
        }
        return stateName;
    }, this);

    this.numberOfIssues = ko.computed(function () {
        var count = 0;
        var cpuTempCounter = 0;
        var addOfflineSSC = false;

        //if (self.current_state() == 0) {
        //    var infoList = self.status_details_info();
        //    for (var key in infoList) {
        //        var info = infoList[key];
        //        if (info.recommendation_flag === true) {
        //            ++count;
        //            if (AMO.Utils.StringContains(info.status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
        //                AMO.Utils.StringContains(info.status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) {
        //                cpuTempCounter++;
        //            }
        //        }
        //        if (info.no_data == true) {
        //            addOfflineSSC = true;
        //        }
        //        // check if there's no connection (not wired nor wireless)
        //        var connection = info.status_output_values()['ARP'];
        //        if (typeof connection !== 'undefined') {
        //            if ($.isEmptyObject(connection.connection) === true) {
        //                addOfflineSSC = true;
        //            }
        //        }
        //    }
        //} else if (self.current_state() == 1) {
        //    addOfflineSSC = true;
        //}

        var infoList = self.status_details_info();
        for (var key in infoList) {
            var info = infoList[key];
            if (info.recommendation_flag === true) {
                ++count;

                if (AMO.Utils.StringContains(info.status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
                    AMO.Utils.StringContains(info.status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) {
                    cpuTempCounter++;
                }
            }
            if (info.no_data == true) {
                addOfflineSSC = true;
            }

            // check if there's no connection (not wired nor wireless)
            var connection = info.status_output_values()['ARP'];
            if (typeof connection !== 'undefined') {
                if ($.isEmptyObject(connection.connection) === true) {
                    addOfflineSSC = true;
                }
            }
        }
        if (self.current_state() == 1 && addOfflineSSC == false) {
            addOfflineSSC = true;
        }

        if (cpuTempCounter >= 2 && count > 1) {
            count -= 1;
        }

        if (addOfflineSSC === true) count++;

        return count;
    }, this);

    this.connection = ko.computed(function () {
        var connectionType = '';
        var infoList = self.status_details_info();
        for (var key in infoList) {
            var info = infoList[key];
            if (info.status_name() === AMO.Constants.SSCParameterKey.ARP) {
                connectionType = info.status_output_values()[AMO.Constants.SSCParameterKey.ARP].connection;
                break;
            }
        }
        return connectionType;
    }, this);

    this.currentStateSortOrder = ko.computed(function () {
        var sortOrder = self.currentStateName() + '-' + AMO.Utils.StringPadding(self.nameSortOrder(), 3); // + AMO.Utils.StringPadding(positionIndex, 3);
        return sortOrder;
    }, this);

    this.currentUpdateTimeSortOrder = ko.computed(function () {
        var sortOrder = self.time() + '-' + AMO.Utils.StringPadding(self.nameSortOrder(), 3);
        return sortOrder;
    }, this);

    this.currentStateImageUrl = ko.computed(function () {
        var imageUrl = 'images/amo-tools-ssc-nominal.png';
        switch (self.currentStateName()) {
            case AMO.Constants.SSCStatus.OFFNOMINAL:
                imageUrl = 'images/amo-tools-ssc-off-nominal.png';
                break;
            case AMO.Constants.SSCStatus.NOMINAL:
                imageUrl = 'images/amo-tools-ssc-nominal.png';
                break;
            case AMO.Constants.SSCStatus.OFFLINE:
                imageUrl = 'images/amo-tools-ssc-offline.png';
                break;
            default:
                imageUrl = 'images/amo-tools-ssc-offline.png';
                break;
        }
        return imageUrl;
    }, this);

    this.currentStateCSSText = ko.computed(function () {
        var cssText = 'rounded-corners ssc-pill-text tag-pill-green-simple';
        switch (self.currentStateName()) {
            case AMO.Constants.SSCStatus.OFFNOMINAL:
                cssText = 'rounded-corners ssc-pill-text tag-pill-yellow-simple';
                break;
            case AMO.Constants.SSCStatus.NOMINAL:
                cssText = 'rounded-corners ssc-pill-text tag-pill-green-simple';
                break;
            case AMO.Constants.SSCStatus.OFFLINE:
                cssText = 'rounded-corners ssc-pill-text tag-pill-gray-simple';
                break;
            default:
                cssText = 'rounded-corners ssc-pill-text tag-pill-gray-simple';
                break;
        }
        return cssText;
    }, this);

};

AMO.SSCStatusDetailInfo = function(sscName, statusName, statusOutput, statusTime, isTemperature, isUsage){
    var self = this;

    if (typeof isTemperature === 'undefined') { isTemperature = false; }
    if (typeof isUsage === 'undefined') { isUsage = false; }

    // this.object_id = sscId; // TODO:NEW DS
    this.ssc_name = sscName;
    this.status_name = ko.observable(statusName);
    this.status_output = ko.observable(statusOutput);
    this.status_time = ko.observable(statusTime);
    // this.status_object_id = ko.observable(statusObjectId); // TODO:NEW DS
    this.recommendation_flag = false;
    this.no_data = false;
    this.alert_message_id = statusName;
    this.ui_sort_order = 0;

    var base_data_url = '../data/ssc/' + sscName;
    this.data_url = '';
    if (sscName.length > 0 && statusName.length > 0) {
        this.data_url = base_data_url + '/' + statusName + '.json';
    }

    // define sort UI order....
    // per MOD order recommended actions 
    // Hard Drive space; Memory (RAM); CPU; Latency; CPU Temp 1 & 2; Hard Drive Temp; Uptime

    //•	SSC Offline 
    //•	Low Hard Drive (D:) Space (≤10%) 
    //•	High Memory (RAM) Usage (>87.5% or 3.5GB) 
    //•	High CPU Usage (100%) 
    //•	Two Network Connections Detected 
    //•	High Network Latency (≥500 ms) 
    //•	High CPU Temp (>80°C) 
    //•	High Hard Drive Temp (>60°C) 
    //•	SSC Uptime ≥ 8 Days 

    if (statusName === AMO.Constants.SSCParameterKey.DiskSpaceUsage) {
        this.ui_sort_order = 0;
    } else if (statusName === AMO.Constants.SSCParameterKey.MemoryUsage) {
        this.ui_sort_order = 1;
    } else if (statusName === AMO.Constants.SSCParameterKey.CPUUsage) {
        this.ui_sort_order = 2;
    } else if (statusName === AMO.Constants.SSCParameterKey.ARP) {
        this.ui_sort_order = 3;
    } else if (statusName === AMO.Constants.SSCParameterKey.Latency) {
        this.ui_sort_order = 4;
    } else if (AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
               AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) {
        var v = statusName.match(/\d+/i);
        var x = 0;
        if (v != null && v.length > 0) {
            x = parseInt(v[0]);
        }
        this.ui_sort_order = 5 + x;
    } else if (statusName === AMO.Constants.SSCParameterKey.HDDTemperature) {
        this.ui_sort_order = 9;
    } else if (statusName === AMO.Constants.SSCParameterKey.Uptime) {
        this.ui_sort_order = 10;
    } else {
        this.ui_sort_order = 11;
    }

    if ((AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
         AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) ||
        statusName === AMO.Constants.SSCParameterKey.HDDTemperature) {
        isTemperature = true;
    }
    if (statusName === AMO.Constants.SSCParameterKey.CPUUsage ||
        statusName === AMO.Constants.SSCParameterKey.DiskSpaceUsage ||
        statusName === AMO.Constants.SSCParameterKey.MemoryUsage) {
        isUsage = true;
    }
    this.isTemperature = isTemperature;
    this.isUsage = isUsage;


    // Map the following status to alert message id
    // Uptime, IP Address, Memory Usage, CPU Core 1 Temperature, GPU Temperature, HDD Temperature, Disk Space Usage, CPU Core 2 Temperature, CPU Usage
    //    to
    // Network Connection, Latency, CPU Usage, RAM Usage, Hard Drive Space, Uptime, CPU Temp, GPU Temp, Hard Drive Temp
    switch (statusName) {
        case AMO.Constants.SSCParameterKey.HDDTemperature: // 'HDD Temperature':
            this.alert_message_id = 'HDD Temp';
            break;
        default:
            // 'CPU Core 1 Temperature', 'CPU Core 2 Temperature'
            if ((AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
                 AMO.Utils.StringContains(statusName, AMO.Constants.SSCParameterKey.CPUTemperature.Temperature))) {
                this.alert_message_id = 'CPU Temp';
            } else {
                this.alert_message_id = statusName;
            }
            break;
    }

    this.status_output_values = ko.computed(function () {
        var s = self.status_output();
        var outputValues = [];

        // Network Connection, Latency, CPU Usage, RAM Usage, Hard Drive Space, Uptime, CPU Temp, Hard Drive Temp
        switch (self.alert_message_id) {
            case AMO.Constants.SSCParameterKey.ARP:
                // Connection type --- Wireless / Wired
                outputValues = AMO.SSC.ExtractConnectionTypeData(s);
                self.recommendation_flag = (outputValues[AMO.Constants.SSCParameterKey.ARP].connection === 'both');
                self.no_data = false;
                break;
            case AMO.Constants.SSCParameterKey.Latency: 
                // IP Address...Latency: in milliseconds
                outputValues = AMO.SSC.ExtractLatencyData(s);
                self.recommendation_flag = (outputValues[AMO.Constants.SSCParameterKey.Latency].isNominal == false);
                self.no_data = (outputValues[AMO.Constants.SSCParameterKey.Latency].latency == -1);
                break;
            case AMO.Constants.SSCParameterKey.Uptime:
                // Uptime
                outputValues = AMO.SSC.ExtractUptimeData(s);
                self.recommendation_flag = (outputValues[AMO.Constants.SSCParameterKey.Uptime].isNominal == false);
                self.no_data = (outputValues[AMO.Constants.SSCParameterKey.Uptime].totalInMinutes == -1);
                break;
            case AMO.Constants.SSCParameterKey.CPUUsage:
            case AMO.Constants.SSCParameterKey.MemoryUsage:
            case AMO.Constants.SSCParameterKey.DiskSpaceUsage:
                // Usages...
                self.recommendation_flag = false;
                self.no_data = false;
                outputValues = AMO.SSC.ExtractUsageData(self.status_name(), s);
                // check if one of them is off nominal...
                for (var key in outputValues) {
                    var o = outputValues[key];
                    if (o.isNominal == false) {
                        self.recommendation_flag = true;
                    }
                    if (o.value == -1) {
                        self.no_data = true;
                        break;
                    }
                }
                break;
            case 'CPU Temp':
            case 'HDD Temp':
                // Temperature...
                self.recommendation_flag = false;
                self.no_data = false;
                outputValues = AMO.SSC.ExtractTemperatureData(self.status_name(), s);

                // check if one of them is off nominal...
                for (var key in outputValues) {
                    var o = outputValues[key];
                    if (o.isNominal == false) {
                        self.recommendation_flag = true;
                    }
                    if (o.value == -1) {
                        self.no_data = true;
                        break;
                    }
                }
                break;
        }
        return outputValues;
    }, this);
};


// NOTE: THIS IS FOR THE KNOCKOUTJS VIEWMODEL, this is where all the magic
AMO.ViewModel = function() {
    // Data
    var self = this;
	
    self.dateTime = ko.observable(AMO.Utils.FormatAMODayAndTime());

    self.tick = function() {
        //self.dateTime(new Date().toGMTString());

        //ISS operates on GMT Day, not by Day of the Month
        //Change to: Wed, 2013/044/18:59:26 
        //self.dateTime(AMO.Utils.FormatAMODateTime());
        self.dateTime(AMO.Utils.FormatAMODayAndTime());
    };

    window.setInterval(self.tick, 1000);
	
    //self.isInProgress = ko.observable(true);
    self.progressMessage = ko.observable('Please wait...');
    self.status = 'Done';
    self.noTOCAFilesAvailable = ko.observable(false);

	// Model for the main Tools tab menu (TOCA, SSC, Settings)
    self.amo_tools = ko.observableArray([
        new AMO.ToolsMenu(0, 'TOCA', 'amo-toca', false),
        new AMO.ToolsMenu(1, 'SSC', 'amo-ssc', false),
		new AMO.ToolsMenu(2, 'Help', 'amo-help', false),
        new AMO.ToolsMenu(3, 'Feedback', 'amo-feedback', false)
    ]);

	self.selectedToolMenuId = ko.observable(-2);
	
	// Model for the TOCA tab	
	self.toca_tabs = ko.observableArray([
		new AMO.Tabs(0, 'Results', true),
		new AMO.Tabs(1, 'Data', false),
        new AMO.Tabs(2, 'Plan Input', false),
        new AMO.Tabs(3, 'Components', false),
		new AMO.Tabs(4, 'Fault Indicators', false),
        new AMO.Tabs(5, 'References', false)
        //new AMO.Tabs(6, 'Feedback', false)
	]);
	self.selectedTocaTabId = ko.observable(0);
	self.selectedTocaTabComponentIndex = 0;
	self.selectedTocaTabReferenceIndex = 0;
	self.selectedSscTabReferenceIndex = 0;

    // Model for the TOCA tab	
	self.toca_tabs_graph_results = ko.observableArray([
		new AMO.Tabs(0, 'TOC/TIC', true),
        new AMO.Tabs(1, 'AMISS', false),
 	]);
	self.selectedTocaTabIdGraphResult = ko.observable(0);

	self.selectTocaTabIdGraphResult = function (id) {
	    var tabs = self.toca_tabs_graph_results();
	    for (var t in tabs) {
	        var t2 = tabs[t];
	        t2.selected(t2.id == id);
	    }
	    self.selectedTocaTabIdGraphResult(id);
	};

	// Model for the TOCA panel	
    self.toca_panels = ko.observableArray([
		new AMO.Panels(0, 'Alerts', true, 2),
		new AMO.Panels(1, 'Recommended Tasks', false, 2),
		new AMO.Panels(2, 'References/Procedures', false, 2)
	]);
	self.selectedTocaPanelId = ko.observable(0);
	// self.tocaLastRun = ko.observable('');

	self.toca_trend_plots = ko.observableArray([
        new AMO.Plot('010', 'TOC Results Trend Plot', 'TOCRESULTSTRENDGRAPH', true),
        new AMO.Plot('020', 'Liquid Flow Average in React TOC', 'LIQUIDFLOWAVERAGEINREACTTOCTRENDGRAPH'),
        new AMO.Plot('030', 'Oxidizer Voltage', 'OXIDIZERVOLTAGETRENDGRAPH')
	]);

	self.ssc_plots = ko.observableArray([
        new AMO.Plot('010', 'Uptime', 'SSCUPTIMEGRAPH', true),
        new AMO.Plot('020', 'Network Latency', 'SSCLATENCYGRAPH'),
        new AMO.Plot('030', 'CPU Usage', 'SSCCPUUSAGEGRAPH'), 
        new AMO.Plot('040', 'Memory (RAM) Usage', 'SSCRAMUSAGEGRAPH'), 
        new AMO.Plot('050', 'Hard Drive (D:) Usage', 'SSCHDDUSAGEGRAPH'), 
        new AMO.Plot('060', 'CPU Temperature', 'SSCCPUTEMPERATUREGRAPH'), 
        new AMO.Plot('070', 'Hard Drive Temperature', 'SSCHDDTEMPERATUREGRAPH')  
	]);

    // remove Amiss Plot based on configuration setting
	var perRunPlots = [new AMO.Plot('050', 'Liquid Flow Rate During Run', 'LIQUIDFLOWRATEDURINGRUNGRAPH'),
        new AMO.Plot('070', 'Oxidizer Voltage Performance During Run', 'OXIDIZERVOLTAGEPERFORMANCEDURINGRUNGRAPH'),
        new AMO.Plot('080', 'Chiller Temperatures (T1,T2,T3) During Run', 'CHILLERTEMPERATUREST1T2T3DURINGRUNGRAPH'),
        new AMO.Plot('090', 'H2 Catalyst Temperatures (T5,T6,T7) During Run', 'H2CATALYSTTEMPERATUREST5T6T7DURINGRUNGRAPH'),
        new AMO.Plot('100', 'Gas Dryer Temperatures (T8,T9,T10) During Run', 'GASDRYERTEMPERATUREST8T9T10DURINGRUNGRAPH'),
        new AMO.Plot('130', 'VCA (P1) Pressure Readings During Run', 'VCAP1PRESSUREREADINGSDURINGRUNGRAPH'),
        new AMO.Plot('140', 'Oxidizer (P2) Pressure Readings During Run', 'OXIDIZERP2PRESSUREREADINGDURINGRUNGRAPH'),
        new AMO.Plot('150', 'Gas Pressure Readings During Run', 'PRESSUREREADINGSDURINGRUNGRAPH')];

	if (AMO.UI.ShowAmissPlot == true) {
	    perRunPlots.push(new AMO.Plot('160', 'TOCA Liquid Loop During Run', 'TOCALIQUIDLOOPGRAPH'));
	}
	self.toca_per_run_plots = ko.observableArray(perRunPlots);

	self.plot_export_options = ko.observableArray([
        new AMO.PlotExportOption('PNG Image', 'image/png', true),
        new AMO.PlotExportOption('JPEG Image', 'image/jpeg', true),
        new AMO.PlotExportOption('PDF Document', 'application/pdf', true),
        new AMO.PlotExportOption('SVG Vector Image', 'image/svg+xml', true),
	]);

	self.toca_selected_plot_id = ko.observable('010');
	self.toca_selected_plot = ko.computed(function () {
	    var selectedPlot = null;
	    var plotId = self.toca_selected_plot_id();
	    for (var i = 0; i < self.toca_trend_plots().length; i++) {
	        var p = self.toca_trend_plots()[i];
	        p.selected(false);
	        if (plotId == p.id) {
	            p.selected(true);
	            selectedPlot = p;
	        }
	    }
	    for (var i = 0; i < self.toca_per_run_plots().length; i++) {
	        var p = self.toca_per_run_plots()[i];
	        p.selected(false);
	        if (plotId == p.id) {
	            p.selected(true);
	            selectedPlot = p;
	        }
	    }
	    return selectedPlot;
	}, this);

	self.ssc_selected_plot_id = ko.observable('010');
	self.ssc_selected_plot = ko.computed(function () {
	    var selectedPlot = null;
	    var plotId = self.ssc_selected_plot_id();
	    for (var i = 0; i < self.ssc_plots().length; i++) {
	        var p = self.ssc_plots()[i];
	        p.selected(false);
	        if (plotId == p.id) {
	            p.selected(true);
	            selectedPlot = p;
	        }
	    }
	    return selectedPlot;
	}, this);

    // Model for the SSC tab	
	self.ssc_tabs = ko.observableArray([
		new AMO.Tabs(0, 'Overview', true),
		new AMO.Tabs(1, 'Details', false),
        new AMO.Tabs(2, 'Data', false),
        new AMO.Tabs(3, 'References', false)
	]);
	self.selectedSscTabId = ko.observable(0);

    // Model for the TOCA panel	
	self.ssc_panels = ko.observableArray([
		new AMO.Panels(0, 'Alerts', true, 1),
		new AMO.Panels(1, 'Recommended Tasks', false, 1),
	]);
	self.selectedSscPanelId = ko.observable(0);

    // Data.....
    // Directory list....
	self.tocaDirectoryList = ko.observableArray([]);

    // self.currentTOCARunDate = ko.observable(''); // TODO: investigate if this is a duplicate to currentSampleDate, if it is, remove and replace with currentSampleDate
    
    // ---------------------------------------------------------------------------------------------------
    // Current (selected) TOCA sample run....
	self.currentTOCASample = ko.observable('');
	self.currentSampleNumber = ko.computed(function () {
	    var sampleNo = AMO.Utils.ExtractSampleNumberFromWorkingDirectory(self.currentTOCASample());
	    return sampleNo;
	}, this);
	self.currentSampleId = ko.computed(function () {
	    var sampleId = AMO.Utils.ExtractSampleIdFromWorkingDirectory(self.currentTOCASample());
	    return sampleId;
	}, this);
	self.currentSampleName = ko.computed(function () {
	    var sampleName = AMO.Utils.ExtractSampleNameFromWorkingDirectory(self.currentTOCASample());
	    return sampleName;
	}, this);
	self.currentSampleDate = ko.computed(function () {
	    var tocaSample = self.currentTOCASample();
	    var sampleDate = '';
	    if (tocaSample.length > 0) {
	        sampleDate = AMO.Utils.FormatAMODayAndTime(AMO.Utils.ExtractDateTimeFromWorkingDirectory(tocaSample));
	    }
	    return sampleDate;
	}, this);
	self.currentSampleStatus = ko.computed(function () {
	    if (self.currentTOCASample() == '') return null;
	    var tocaResult = AMO.Data.GetTOCAResultBySample(self.currentTOCASample()); //AMO.Data.GetTOCAResultBySample(sampleId);
	    var isNominal = AMO.TOCA.GetOverallStatus(tocaResult);
	    return isNominal;
	}, this);
	self.currentSampleTOCTrendResult = ko.computed(function () {

	    var tocTrendResult = {
	        isNominal: 'NA',
	        text: 'n/a',
	        css: 'bold',
	        highLimit: 0,
	        lowLimit: 0
	    };

	    var tocaResult = AMO.Data.GetTOCAResultBySample(self.currentTOCASample()); //AMO.Data.GetTOCAResultBySample(sampleId);
	    if (tocaResult != null) {
	        if (tocaResult.Is_In_Family == 1) {
	            tocTrendResult.isNominal = 'YES';
	            tocTrendResult.css = 'nominal';
	            tocTrendResult.text = 'Nominal';
	            if (AMO.Utils.StringContains(tocaResult.TOC_Trend_Status, 'Nominal Cal Check Sample Percent Error') == true) {
	                tocTrendResult.text = tocaResult.TOC_Trend_Status;
	            }
	        } else if (tocaResult.Is_In_Family == 0 &&
                AMO.Utils.StringContains(tocaResult.Sample_Type, '-Abort') == false &&
                tocaResult.Sample_Type_Desc != null) {
	            tocTrendResult.isNominal = 'NO';
	            tocTrendResult.css = 'off-nominal';
	            tocTrendResult.text = 'Off Nominal';
	            if (typeof tocaResult.TOC_Trend_Status != 'undefined' && tocaResult.TOC_Trend_Status != null) {
	                tocTrendResult.text = tocaResult.TOC_Trend_Status;
	            }
	        } else {
	            tocTrendResult.isNominal = 'NA';
	            tocTrendResult.text = 'n/a';
	            tocTrendResult.css = 'bold';
	        }

	        if (typeof tocaResult.TOC_Trend_High_Limit != 'undefined') {
	            tocTrendResult.highLimit = tocaResult.TOC_Trend_High_Limit;
	        }
	        if (typeof tocaResult.TOC_Trend_Low_Limit != 'undefined') {
	            tocTrendResult.lowLimit = tocaResult.TOC_Trend_Low_Limit;
	        }
	    }
	    return tocTrendResult;
	}, this);
	self.currentSampleAlerts = ko.observableArray([]);
    // ---------------------------------------------------------------------------------------------------

    // ---------------------------------------------------------------------------------------------------
    // Last (most recent) TOCA sample run....
	self.lastTOCASample = ko.observable('');
	self.lastSampleNumber = ko.computed(function () {
	    var sampleNo = AMO.Utils.ExtractSampleNumberFromWorkingDirectory(self.lastTOCASample());
	    return sampleNo;
	}, this);
	self.lastSampleId = ko.computed(function () {
	    var sampleId = AMO.Utils.ExtractSampleIdFromWorkingDirectory(self.lastTOCASample());
	    return sampleId;
	}, this);
	self.lastSampleName = ko.computed(function () {
	    var sampleName = AMO.Utils.ExtractSampleNameFromWorkingDirectory(self.lastTOCASample());
	    return sampleName;
	}, this);
	self.lastSampleDate = ko.computed(function () {
	    var tocaSample = self.lastTOCASample();
	    var sampleDate = '';
	    if (tocaSample.length > 0) {
	        sampleDate = AMO.Utils.FormatAMODayAndTime(AMO.Utils.ExtractDateTimeFromWorkingDirectory(tocaSample));
	    }
	    return sampleDate;
	}, this);
	self.lastSampleStatus = ko.computed(function () {
	    if (self.lastTOCASample() == '') return null;
	    var tocaResult = AMO.Data.GetTOCAResultBySample(self.lastTOCASample()); 
	    var isNominal = AMO.TOCA.GetOverallStatus(tocaResult);
	    return isNominal;
	}, this);
	self.lastSampleTOCTrendResult = ko.computed(function () {
	    var tocTrendResult = {
	        isNominal: 'NA',
	        text: 'n/a',
	        css: 'bold',
	        highLimit: 0,
	        lowLimit: 0
	    };

	    var tocaResult = AMO.Data.GetTOCAResultBySample(self.lastTOCASample()); 
	    if (tocaResult != null) {
	        if (tocaResult.Is_In_Family == 1) {
	            tocTrendResult.isNominal = 'YES';
	            tocTrendResult.css = 'nominal';
	            tocTrendResult.text = 'Nominal';
	        } else if (tocaResult.Is_In_Family == 0 &&
                AMO.Utils.StringContains(tocaResult.Sample_Type, '-Abort') == false &&
                tocaResult.Sample_Type_Desc != null) {
	            tocTrendResult.isNominal = 'NO';
	            tocTrendResult.css = 'off-nominal';
	            tocTrendResult.text = 'Off Nominal';
	            if (typeof tocaResult.TOC_Trend_Status != 'undefined' && tocaResult.TOC_Trend_Status != null) {
	                tocTrendResult.text = tocaResult.TOC_Trend_Status;
	            }
	        } else {
	            tocTrendResult.isNominal = 'NA';
	            tocTrendResult.text = 'n/a';
	            tocTrendResult.css = 'bold';
	        }

	        if (typeof tocaResult.TOC_Trend_High_Limit != 'undefined') {
	            tocTrendResult.highLimit = tocaResult.TOC_Trend_High_Limit;
	        }
	        if (typeof tocaResult.TOC_Trend_Low_Limit != 'undefined') {
	            tocTrendResult.lowLimit = tocaResult.TOC_Trend_Low_Limit;
	        }
	    }
	    return tocTrendResult;
	}, this);
	self.lastSampleAlerts = ko.observableArray([]);
    // ---------------------------------------------------------------------------------------------------


	self.tocaProcedureList = []; // this is for the Add A Task dialog

    // Procedures and References
	self.tocaProcedures = ko.observableArray([]); 
	self.tocaComponents = ko.observableArray([]);
	self.tocaHardwareMessages = ko.observableArray([]);
 	self.tocaSoftwareMessages = ko.observableArray([]);
 	self.tocaPlotDescriptions = ko.observableArray([]);
 	self.tocaStateDescriptions = ko.observableArray([]);
 	self.tocaVideos = ko.observableArray([]);
 	self.amoVideos = ko.observableArray([]);

	self.tocaProceduresContext = ko.observableArray([]);
	self.tocaComponentsContext = ko.observableArray([]);
	self.tocaHardwareMessagesContext = ko.observableArray([]);
	self.tocaSoftwareMessagesContext = ko.observableArray([]);
	self.tocaPlotDescriptionsContext = ko.observableArray([]);
	self.tocaStateDescriptionsContext = ko.observableArray([]);
	self.tocaVideosContext = ko.observableArray([]);

    // Fault Indicator....
	self.currentFaultIndicator = {
	    "ID": "1111",
	    "Name": ko.observable("No Error/Check Circuit Breakers"),
	    "Rationale": "",
	    "URL": url = AMO.Paths.RelativeStaticFaultIndicatorsPath + "1111.htm",
        "tags": []
	};

    // data/model for the Task/Schedule....
    // sample structure of the schedule/task 
    //     {"week_start_date": "03/08/2013", "due_date": "062", "procedure": "2.6.790", "status": AMO.Constants.TaskStatus.SCHEDULED, "task_name": "PWD Sampling Hot"}
	self.tocaCurrentWeekStartDate = ko.observable('');
	self.tocaNextWeekStartDate = ko.observable('')
	self.tocaFutureWeekStartDate = ko.observable('');

	self.tocaCurrentWeekSchedule = ko.observableArray([]);

    //// 3/25/2014 - per Kara (MOD) no need to apply the red border line
	//self.tocaCurrentWeekSchedule.subscribe(function (newVal) {
	//    AMO.Utils.WriteConsole('tocaCurrentWeekSchedule - change');
    //    window.setTimeout(function () { AMO.UI.ApplyActivitiesTabRedBorderLine(); }, 1000);
	//});

	self.tocaNextWeekSchedule = ko.observableArray([]);
	self.tocaFutureWeekSchedule = ko.observableArray([]);

	self.tocaTasksHistory = ko.observableArray([]);

	self.tocaTasksHistoryGridItems = ko.observableArray([]);
	
    self.getScheduledTaskCount = ko.computed(function () {
        var allTasks = self.tocaCurrentWeekSchedule().concat(self.tocaNextWeekSchedule()).concat(self.tocaFutureWeekSchedule());
        if (allTasks === null) { return 0; }
        var tasks = $.grep(allTasks, function (e) {
            return (e.status() === AMO.Constants.TaskStatus.SCHEDULED);
        });
        return tasks.length;
    }, this);

    self.getRemainingTaskCountForThisWeek = ko.computed(function () {
        var allTasks = self.tocaCurrentWeekSchedule();
        if (allTasks == null) { return 0; }
        var tasks = $.grep(allTasks, function (e) {
            return (e.status() != AMO.Constants.TaskStatus.COMPLETED &&
                    e.status() != AMO.Constants.TaskStatus.ABORTED);
        });
        return tasks.length;
    }, this);

    self.getRemainingTaskCountForNextWeek = ko.computed(function () {
        var allTasks = self.tocaNextWeekSchedule();
        if (allTasks == null) { return 0; }
        var tasks = $.grep(allTasks, function (e) {
            return (e.status() != AMO.Constants.TaskStatus.COMPLETED &&
                    e.status() != AMO.Constants.TaskStatus.ABORTED);
        });
        return tasks.length;
    }, this);


    // HyDE data
	self.currentHydeResultTocaRun = ko.observable('');
	self.currentHydeResultTimestamp = ko.observable('');
	self.currentHydeResultFaultDetected = ko.observable('NA');
	self.currentHydeResultException = ko.observable('');
	self.currentHydeResultDiagnosis = ko.observableArray([]);

	self.lastHydeResultTocaRun = ko.observable('');
	self.lastHydeResultTimestamp = ko.observable('');
	self.lastHydeResultFaultDetected = ko.observable('NA');
	self.lastHydeResultException = ko.observable('');
	self.lastHydeResultDiagnosis = ko.observableArray([]);

    // AMISS data
	self.currentAmissResult = [];
	self.currentAmissResultFaultDetected = ko.observable('NA'); 
	self.currentAmissAssessment = ko.observableArray([]);
	self.currentAmissAssessmentSubsystem = ko.observable('');

	self.lastAmissResult = [];
	self.lastAmissResultFaultDetected = ko.observable('NA');
	self.lastAmissAssessment = ko.observableArray([]);
	self.lastAmissAssessmentSubsystem = ko.observable('');

    // Overview result data - from Analysis History....
    self.currentResultTypeOfAnalysis = ko.observable('');
    self.currentResultAverageTOC = ko.observable('');
    self.currentResultAverageTIC = ko.observable('');
    self.currentResultPercentRSDTOC = ko.observable('');
    self.currentResultReplicates = ko.observableArray([]);
    self.currentResultAnalysisNotAvailable = ko.computed(function () {
        return (this.currentResultTypeOfAnalysis() == null || this.currentResultTypeOfAnalysis() == '');
    }, this);

    self.lastResultTypeOfAnalysis = ko.observable('');
    self.lastResultAverageTOC = ko.observable('');
    self.lastResultAverageTIC = ko.observable('');
    self.lastResultPercentRSDTOC = ko.observable('');
    self.lastResultReplicates = ko.observableArray([]);
    self.lastResultAnalysisNotAvailable = ko.computed(function () {
        return (this.currentResultTypeOfAnalysis() == null || this.currentResultTypeOfAnalysis() == '');
    }, this);


    // SSC related stuff...
    self.sscProcedures = ko.observableArray([]);
    self.sscAlertMessages = ko.observableArray([]);
    self.sscPlotDescriptions = ko.observableArray([]);
    self.sscDefinitions = ko.observableArray([]);
    self.sscVideos = ko.observableArray([]);

    self.SSCHosts = ko.observableArray([]);
    self.SSCHostList = ko.observableArray([]);
    self.SSCHostsNominalCount = ko.observable(0);
    self.SSCHostsOffNominalCount = ko.observable(0);
    self.SSCHostsOfflineCount = ko.observable(0);
    
    // self.currentSSCId = ko.observable(0);
    self.currentSSCName = ko.observable('');
    self.currentSSCLocation = ko.observable('');
    self.currentSSCConnection = ko.observable('');
    self.currentSSCUpdatetime = ko.observable('');

    self.currentSSCStatus = ko.observable('');
    self.currentSSCAlertHistoryURL = ko.observable('');
    self.currentSSCAlertHistory = ko.observableArray([]);

    self.currentSSCStatusDetails = ko.observableArray([]);
    self.currentSSCRecommendationCount = ko.observable(0);

    self.currentSSCNameWithLocation = ko.computed(function () {
        var fullname = self.currentSSCName();
        if (self.currentSSCLocation().length > 0) {
            fullname += ' - ' + self.currentSSCLocation();
        }
        return fullname;
    }, this);

    self.currentSSCStatusDetailsLatency = ko.computed(function () {
        var latency = { value: null, valueText: 'n/a', thresholdText: '', isNominal: true };
        var statusDetails = self.currentSSCStatusDetails();

        latency.thresholdText = 'Threshold ≥' + AMO.Constants.SSCAlertThreshold.LatencyMilliseconds + 'ms';
        latency.threshold = AMO.Constants.SSCAlertThreshold.LatencyMilliseconds;

        latency.thresholdPercent = (latency.threshold / 600) * 100;

        for (var idx = 0; idx < statusDetails.length; idx++) {
            var status = statusDetails[idx];
            if (status.status_name() == AMO.Constants.SSCParameterKey.Latency) {
                var outputValue = status.status_output_values()[AMO.Constants.SSCParameterKey.Latency];
                latency.value = outputValue.latency;
                if (outputValue.latency >= 0) {
                    latency.valueText = outputValue.latency + ' ms';
                    latency.isNominal = !status.recommendation_flag;
                } else {
                    latency.valueText = 'n/a';
                }
                break;
            }
        }
        latency.valuePercent = 0;
        if (latency.value > 0) {
            if (latency.value < 600) {
                latency.valuePercent = (latency.value / 600) * 100;
            } else {
                latency.valuePercent = 100;
            }
        }
        return latency;
    }, this);

    self.currentSSCStatusDetailsUptime = ko.computed(function () {
        var uptime = { value: null, valueText: 'n/a', thresholdText: '', isNominal: true };
        var statusDetails = self.currentSSCStatusDetails();

        uptime.thresholdText = 'Threshold ≥' + (AMO.Constants.SSCAlertThreshold.UptimeElapsedTimeMinutes / 1440) + ' days';
        uptime.threshold = (AMO.Constants.SSCAlertThreshold.UptimeElapsedTimeMinutes / 1440);

        uptime.thresholdPercent = (uptime.threshold / 8) * 100;
        uptime.valueDay = 0;

        for (var idx = 0; idx < statusDetails.length; idx++) {
            var status = statusDetails[idx];

            if (status.status_name() == AMO.Constants.SSCParameterKey.Uptime) {
                // outputValues[AMO.Constants.SSCParameterKey.Uptime] = { days: 0, hours: 0, minutes: 0 };
                var ut = status.status_output_values()[AMO.Constants.SSCParameterKey.Uptime];
                if (ut.totalInMinutes >= 0) {
                    uptime.value = ut.totalInMinutes;
                    uptime.valueDay = (ut.totalInMinutes / 1440).toFixed(3);
                    uptime.valueText = AMO.Utils.StringPadding(ut.days, 2) + ':' +
                                 AMO.Utils.StringPadding(ut.hours, 2) + ':' +
                                 AMO.Utils.StringPadding(ut.minutes, 2);
                    uptime.isNominal = ut.isNominal;
                } else {
                    uptime.valueText = 'n/a';
                }
                break;
            }
        }
        uptime.valuePercent = 0;
        if (uptime.valueDay > 0) {
            if (uptime.valueDay < 8) {
                uptime.valuePercent = (uptime.valueDay / 8) * 100;
            } else {
                uptime.valuePercent = 100;
            }
        }
        return uptime;
    }, this);

    self.currentSSCStatusDetailsTemperature = ko.computed(function () {

        // Only process the following parameters from ICINGA. Meaning the ff. are the only ones supported by AMO UI
        // Uptime, IP Address, CPU Usage, Disk Space Usage, Memory Usage, CPU Core[?] Temperature, HDD Temp
        var statusDetails = self.currentSSCStatusDetails();
        var list = [];
        for (var idx = 0; idx < statusDetails.length; idx++) {
            var status = statusDetails[idx];
            if (status.isTemperature == true) {
                list.push(status);
            }
        }
        var cpuTemp = true;
        var hddTemp = true;
        if (list.length < 3) {
            for (var idx = 0; idx < list.length; idx++) {
                if (AMO.Utils.StringContains(list[idx].status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.CPU) &&
                    AMO.Utils.StringContains(list[idx].status_name(), AMO.Constants.SSCParameterKey.CPUTemperature.Temperature)) {
                    cpuTemp = false;
                }
                if (AMO.Utils.StringContains(list[idx].status_name(), AMO.Constants.SSCParameterKey.HDDTemperature)) {
                    hddTemp = false;
                }
            }
            if (cpuTemp == true) {
                list.push(new AMO.SSCStatusDetailInfo('SSCxx','CPU Core 1 Temperature', '', null));
            }
            if (hddTemp == true) {
                list.push(new AMO.SSCStatusDetailInfo('SSCxx', AMO.Constants.SSCParameterKey.HDDTemperature, '', null));
            }

        }
        return list;
    }, this);

    self.currentSSCStatusDetailsUsage = ko.computed(function () {
        var statusDetails = self.currentSSCStatusDetails();
        var list = [];
        for (var idx = 0; idx < statusDetails.length; idx++) {
            var status = statusDetails[idx];
            if (status.isUsage == true) {
                list.push(status);
            }
        }
        var cpuUsage = true;
        var hddUsage = true;
        var ramUsage = true;
        if (list.length < 2) {
            for (var idx = 0; idx < list.length; idx++) {
                //if (AMO.Utils.StringContains(list[idx].status_name(), 'CPU Usage')) 
                if (list[idx].status_name() == AMO.Constants.SSCParameterKey.CPUUsage) {
                    cpuUsage = false;
                }
                // if (AMO.Utils.StringContains(list[idx].status_name(), 'Disk Space Usage')) 
                if (list[idx].status_name() == AMO.Constants.SSCParameterKey.DiskSpaceUsage) {
                    hddUsage = false;
                }
                //if (AMO.Utils.StringContains(list[idx].status_name(), 'Memory Usage')) 
                if (list[idx].status_name(), AMO.Constants.SSCParameterKey.MemoryUsage) {
                    ramUsage = false;
                }
            }
            if (cpuUsage == true) {
                list.push(new AMO.SSCStatusDetailInfo('SSCxx', AMO.Constants.SSCParameterKey.CPUUsage, '', null));
            }
            if (hddUsage == true) {
                list.push(new AMO.SSCStatusDetailInfo('SSCxx', AMO.Constants.SSCParameterKey.DiskSpaceUsage, '', null));
            }
            if (ramUsage == true) {
                list.push(new AMO.SSCStatusDetailInfo('SSCxx', AMO.Constants.SSCParameterKey.MemoryUsage, '', null));
            }
        }
        return list;
    }, this);

    self.currentSSCStatusDetailsRecommendations = ko.computed(function () {
        var statusDetails = self.currentSSCStatusDetails();
        var list = [];
        for (var idx = 0; idx < statusDetails.length; idx++) {
            var status = statusDetails[idx];
            if (status.recommendation_flag == true) {
                list.push(status);
            }
        }
        return list;
    }, this);

    self.currentSSCAlertHistoryEventHandler = ko.computed(function () {
        var jsonUrlPath = self.currentSSCAlertHistoryURL();

        if ($.trim(jsonUrlPath) != '') {
            AMO.Data.GetJSONDataFromFile(jsonUrlPath, function (data) {
                // update UI elements...
                //// alert(data.length);

                //function sortFunction(a, b) {
                //    var dateA = new Date(a.time).getTime();
                //    var dateB = new Date(b.time).getTime();
                //    // return dateA > dateB ? 1 : -1;  // ascending
                //    return dateA > dateB ? -1 : 1; // descending
                //};
                ////data.sort(sortFunction);


                //AMO.Utils.SortArray(data, 'time', false, false);
                
                function AlertHistoryItem(dateStart, dateEnd, alertMessage, id, flag) {
                    var start = moment(dateStart);
                    var end = moment(dateEnd);
                    this.dateStart = start.toDate();
                    this.dateEnd = end.toDate();
                    this.duration = end.diff(start, 'hours', true);
                    this.id = id;
                    this.flag = flag;

                    this.alertMessage = alertMessage;

                    if (AMO.Utils.StringContains(alertMessage, 'High CPU Temp') === true) {
                        if (flag === 'cpu1temp') {
                            this.alertMessage = AMO.Utils.StringReplace(alertMessage, 'High CPU Temp', 'High CPU1 Temp');
                        } else if (flag === 'cpu2temp') {
                            this.alertMessage = AMO.Utils.StringReplace(alertMessage, 'High CPU Temp', 'High CPU2 Temp');
                        }
                    }
                
                };

                var mappedData = [];
                if (data != null) {
                    for (var index = 0; index < data.length; index++) {
                        var d = data[index];
                        var alertMessageObj = AMO.Data.GetSSCAlertMessageByKey(d.id);
                        if (alertMessageObj != null) {
                            mappedData.push(new AlertHistoryItem(d.start, d.end, alertMessageObj.Name, d.id, d.alert))
                        }
                    }
                    // AMO.Utils.SortArray(mappedData, 'dateStart', false, false);

                    var columnNameSort = 'dateStart';
                    var isAscending = false;

                    $('td.ssc-alert-history-sort-column').each(function () {
                        var t = $(this);
                        var text = t.text(); // t.attr('data-column-text');
                        var colName = t.attr('data-column-name');

                        if (AMO.Utils.StringContains(text, '▲') ||
                            AMO.Utils.StringContains(text, '▼')) {
                            columnNameSort = colName;
                            isAscending = AMO.Utils.StringContains(text, '▲');
                        }
                    });
                    AMO.Utils.SortArray(mappedData, columnNameSort, false, isAscending);
                }
                self.currentSSCAlertHistory(mappedData);
            });
        }
        return;
    }, this);

	self.TOCARecommendedProcedures = ko.observableArray([]);
	self.TOCARecommendedProceduresGridOptions = { data: self.TOCARecommendedProcedures };

	self.errorMessages = ko.observableArray([]);
	self.healthMonitorItems = ko.observableArray([]);

    // Behaviours
    self.selectToolMenu = function(tool) {

        if (self.selectedToolMenuId() == tool.id) {
            return;
        }
        self.selectedToolMenuId(tool.id);
        var tools = self.amo_tools();
        for (var t in tools) {
            var t2 = tools[t];
            t2.selected(t2.id == tool.id);
        }

        AMO.UI.ScrollTop(0, 500);

        window.setTimeout(function () {

            if (AMO.UI.SuppressHashUpdate == false) {
                AMO.UI.SetAppHashRoute(tool.id.toString(), true);
            }

            AMO.UI.PauseAllHelpVideos();

            if (tool.id != 3) { // not Feedback tab
                AMO.TOCA.ResetFeedback();
            }

            $SearchBoxText = $('#SearchBoxText');

            if ($SearchBoxText.val() != '') {
                $('.search-box-clear').trigger('touchclick');
            }
            switch (tool.id) {
                case 0:
                    $SearchBoxText.attr('placeholder', 'Search in TOCA References');
                    break;
                case 1:
                    $SearchBoxText.attr('placeholder', 'Search in SSC References');
                    break;
                case 2:
                    $SearchBoxText.attr('placeholder', 'Search in Help');
                    break;
                case 3:
                    window.setTimeout(function () {
                        $('#FeedbackText').focus();
                    }, 100);
                    break;
                case 4:
                    break;
            }

            AMO.UI.SetupComponentTabImageZoom();

        }, 100);
    };

    self.selectToolMenuIndex = function (index) {

        if (index < 0) {
            self.selectedToolMenuId(index);
            if (AMO.UI.SuppressHashUpdate == false) {
                AMO.UI.SetAppHashRoute(index.toString(), true);
            }
            return;
        }

        var selectedTool = null;
        var tools = self.amo_tools();
        for (var t in tools) {
            var t2 = tools[t];
            if (t2.id == index) {
                selectedTool = t2;
                break;
            }
        }
        if (selectedTool != null) {
            self.selectToolMenu(selectedTool);
        }
    };

	self.selectTocaTab = function(tab) {

	    AMO.UI.ClearImageZoom();

	    // AMO.UI.ClearVideo(); // in case there's video currently playing...
	    // pause all videos...
	    AMO.UI.PauseAllHelpVideos();

	    if (AMO.UI.GoToSpecificItem == '') {
	        AMO.UI.ScrollTop(0, 1000);
	    }

	    self.selectedTocaTabId(tab.id);
		var tabs = self.toca_tabs();
		for (var t in tabs){
			var t2 = tabs[t];
			t2.selected(t2.id == tab.id);
		}

	    // update browser's hash....
		// alert(self.selectedToolMenuId() + '|' + self.selectedTocaTabId());
		if (AMO.UI.SuppressHashUpdate == false) {
		    AMO.UI.SetAppHashRoute(self.selectedToolMenuId() + '|' + self.selectedTocaTabId(), true);
		}

		var tabHelpContainer = $('#divTOCATabHelpPanelContent .help-container');
		tabHelpContainer.parent().scrollTop(0);
		switch (tab.id)
		{
		    case 0:
		        // Results TAB
		        tabHelpContainer.load('../static_contents/help/toca_results_help.htm');
		        break;
		    case 1:
		        // Data TAB - plots
		        tabHelpContainer.load('../static_contents/help/toca_data_help.htm');

		        if (AMO.Model.noTOCAFilesAvailable() == true) {
		            return;
		        }
		        
		        if (AMO.UI.GoToSpecificItem != '') {
		            AMO.UI.LoadGraph(AMO.UI.GoToSpecificItem, function () {
		                AMO.UI.UpdatePlotPreviousNextButtons('TOCA');
		                AMO.UI.GoToSpecificItem = '';
		            });
		        } else {
		            var FrameGraphContainer = $('#FrameGraphContainer');
		            var initializeGraph = false;
		            if (FrameGraphContainer.length > 0) {
		                initializeGraph = FrameGraphContainer.is(':empty');
		            }
		            if (initializeGraph == true) {
		                AMO.UI.LoadGraph(null, function () {
		                    // done...
		                });
		            }
		        }
		        break;
		    case 2:
		        // Plan Input TAB
		        tabHelpContainer.load('../static_contents/help/toca_plan_input_help.htm');

		        // AMO.UI.ApplyActivitiesTabRedBorderLine();
		        AMO.UI.InitializeCrewNote();

		        break;
		    case 3:
		        // Components TAB
		        tabHelpContainer.load('../static_contents/help/toca_components_help.htm');

		        if (AMO.UI.GoToSpecificItem.length > 0) {
		            var t = $('li[data-container-id="divToca' + AMO.UI.GoToSpecificItem + '"]');
		            if (t.length > 0) {
		                // if htmlControl is visible close fullscreen first...
		                if ($('#htmlControl').is(':visible')) {
		                    AMO.UI.HideFullscreenDialog();
		                }
		                t.trigger('touchclick'); // .click();
		            }
		        }

		        AMO.UI.SetupComponentTabImageZoom();
		        break;
		    case 4:
		        // Fault Indicators TAB
		        tabHelpContainer.load('../static_contents/help/toca_fault_indicators_help.htm');

		        //self.generateTocaFaultIndicatorContextHelp();
		        break;
		    case 5:
		        // References TAB
		        tabHelpContainer.empty();
		        $('#divTocaReferenceDetail').hide();
		        $('#divTocaReferenceDetailVideo').hide();
		        $('#divTocaReferenceContainer').show();
		        break;
		}
	};

	self.selectTocaTabIndex = function (index, triggerEvent) {
	    self.selectedTocaTabId(index);
	    if (typeof triggerEvent == 'undefined') {
	        var tabs = self.toca_tabs();
	        for (var t in tabs) {
	            var t2 = tabs[t];
	            t2.selected(t2.id == index);
	        }
	        AMO.UI.ScrollTop(0, 1000);
	    } else {
	        var tabs = self.toca_tabs();
	        var selectedTab = null;
	        for (var t in tabs) {
	            var t2 = tabs[t];
	            if (t2.id == index) {
	                selectedTab = t2;
	                break;
	            }
	        }
	        if (selectedTab != null) {
	            self.selectTocaTab(selectedTab);
	        }
	    }
	};

	self.selectTocaTabGraphResult = function (tab) {
	    self.selectedTocaTabIdGraphResult(tab.id);
	    var tabs = self.toca_tabs_graph_results();
	    for (var t in tabs) {
	        var t2 = tabs[t];
	        t2.selected(t2.id == tab.id);
	    }
	};

	self.selectTocaPanel = function(panel) {
        self.selectedTocaPanelId(panel.id);
		
		var currPanel = self.toca_panels()[panel.id];
		currPanel.selected(!currPanel.selected());
	};

	function getTocaMenuItemByName(name) {
	    var list = self.tocaDirectoryList();
	    for (var key in list) {
	        if (list[key].workingDirectory == name) {
	            return list[key];
	        }
	    }
	    return null;
	};

	self.selectTocaWorkingFolderByIndex = function (index) {
	    var folder = self.tocaDirectoryList()[index];

	    self.selectTocaWorkingFolder(folder);
	};

	self.selectTocaWorkingFolder = function (folder, event) {

	    AMO.UI.ScrollTop(0);

	    if (event != null) {
	        AMO.UI.StopPropagation(event);
	    }

	    var divTocaRunDropDownDivFirst = $('#divTocaRunDropDown div:first');
	    divTocaRunDropDownDivFirst.removeClass('no-bottom-border');
	    divTocaRunDropDownDivFirst.find('.arrow-text').text('▼');

	    $('#divTocaRunList').hide();
	    AMO.UI.CurrentClickedElement = null;

	    if (self.currentTOCASample() === folder.workingDirectory) {
	        return;
	    }

	    // reset all the expandable divs....
	    $('#divTocaOverviewContent [data-container-id]').each(function () {
	        var t = $(this);
	        var containerId = t.attr('data-container-id');
	        if ($('#' + containerId).is(':visible')) {
	            t.trigger('touchclick'); //.click();
	        }
	    });
	    $('#divTocaOverviewContent [data-container-box]').each(function () {
	        var t = $(this);
            var containerCss = t.attr('data-container-box');
            var container = t.parent().parent().find('.' + containerCss);

            var attr = container.attr('data-auto-load');
	        // For some browsers, `attr` is undefined; for others,
	        // `attr` is false.  Check for both.
            if (typeof attr !== 'undefined' && attr !== false) {
                // ...
                // do nothing...
            } else {
                if (container.is(':visible')) {
                    t.trigger('touchclick'); //.click();
                }
            }
	    });

	    var selectedTocaMenuItem = null;

	    if (self.selectedTocaTabId() === 0 || self.selectedTocaTabId() === 1) {
	        AMO.Utils.SetUserActivityLogAuto('BUTTON:SELECT_TOCA_SAMPLE', folder.workingDirectory);
	    }

	    if (self.selectedTocaTabId() == 0) {

	        selectedTocaMenuItem = getTocaMenuItemByName(folder.workingDirectory);

	        self.currentTOCASample(folder.workingDirectory);

	        selectedTocaMenuItem.isInProgress(true);

	        $('#divTocaOverviewContent').hide();
	        AMO.TOCA.LoadTocaData(function () {
	            var list = self.tocaDirectoryList();
	            for (var key in list) {
	                list[key].selected((list[key].workingDirectory == folder.workingDirectory));
	            }
	            selectedTocaMenuItem.isInProgress(false);
	            var divTocaRunDropDownDivFirst = $('#divTocaRunDropDown div:first');
	            divTocaRunDropDownDivFirst.removeClass('no-bottom-border');
	            divTocaRunDropDownDivFirst.find('.arrow-text').text('▼');
	            $('#divTocaOverviewContent').show('fade', {}, 500, function () {
                    // do nothing for now...
	            });

	            window.setTimeout(function () { AMO.UI.UpdateSampleRunPreviousNextButtons(); }, 1000);
	        });

	    } else if (self.selectedTocaTabId() == 1) {
	        selectedTocaMenuItem = getTocaMenuItemByName(folder.workingDirectory);

	        self.currentTOCASample(folder.workingDirectory);

	        selectedTocaMenuItem.isInProgress(true);

	        window.setTimeout(function () {

	            AMO.TOCA.LoadTocaData(function () {
	                var list = self.tocaDirectoryList();
	                for (var key in list) {
	                    list[key].selected((list[key].workingDirectory == folder.workingDirectory));
	                }
	                selectedTocaMenuItem.isInProgress(false);
	                var divTocaRunDropDownDivFirst = $('#divTocaRunDropDown div:first');
	                divTocaRunDropDownDivFirst.removeClass('no-bottom-border');
	                divTocaRunDropDownDivFirst.find('.arrow-text').text('▼');

	                AMO.UI.LoadGraph(null, function () {
	                    // do nothing for now... this is after the slide animation is done.
	                });

	                window.setTimeout(function () { AMO.UI.UpdateSampleRunPreviousNextButtons(); }, 1000);
	            });
	        }, 500);
	    }

	    // window.setTimeout(function () { AMO.UI.UpdateSampleRunPreviousNextButtons(); }, 1000);
	};

	self.selectSscNameClickOverview = function (ssc, event) {

        // Override sort of the SSC list drop down...
	    AMO.SSC.SortSSCListAuto();

	    self.selectSscTabById(1);

	    self.selectSscNameClick(ssc, event);
	};

	self.selectSscNameClick = function (ssc, event) {
	    // AMO.UI.ScrollTop(0);
	    if (event != null) {
	        AMO.UI.StopPropagation(event);
	    }

	    var divSscDropDownDivFirst = $('#divSscDropDown div:first');
	    divSscDropDownDivFirst.removeClass('no-bottom-border');
	    divSscDropDownDivFirst.find('.arrow-text').text('▼');

	    $('#divSscList').hide();
	    AMO.UI.CurrentClickedElement = null;

	    if (self.currentSSCName() == ssc.name()) {
	        return;
	    }

	    //// self.currentSSCId(ssc.object_id);
	    //self.currentSSCName(ssc.name());
	    //self.currentSSCLocation(ssc.location_name());
	    //self.currentSSCConnection(ssc.connection());
	    //self.currentSSCUpdatetime(ssc.time());

	    //self.currentSSCStatus(ssc.currentStateName());
	    //self.currentSSCAlertHistoryURL(ssc.alert_history_url);

	    $('#divSSCDetails').blockMe();
	    window.setTimeout(function () {
	        self.selectSscName(ssc);

	        if (AMO.Model.selectedSscTabId() == 2) {
	            AMO.UI.ResetGraphUISSC();
	            AMO.UI.LoadGraphSSC();
	        } else {
	            AMO.UI.ResetGraphUISSC();
	        }


	        $('#divSSCDetails').unblockMe();
	    }, 500);

	    //if (AMO.Model.selectedSscTabId() == 2) {
	    //    AMO.UI.ResetGraphUISSC();
	    //    AMO.UI.LoadGraphSSC();
	    //} else {
	    //    AMO.UI.ResetGraphUISSC();
	    //}

	    if (self.selectedSscTabId() === 1 || self.selectedSscTabId() === 2) {
	        AMO.Utils.SetUserActivityLogAuto('BUTTON:SELECT_SSC', ssc.name());
	    }
	};

	self.selectSscName = function (ssc) {
	    AMO.UI.ScrollTop(0);

        // destroy all charts first...
	    $('.sscTemperature, .sscUsage').each(function () {
	        var t = $(this);
	        t.highcharts().destroy();
	    });

	    // self.currentSSCId(ssc.object_id);
	    self.currentSSCName(ssc.name());
	    self.currentSSCLocation(ssc.location_name());
	    self.currentSSCConnection(ssc.connection());
	    self.currentSSCUpdatetime(ssc.time());

	    self.currentSSCStatus(ssc.currentStateName());
	    self.currentSSCAlertHistoryURL(ssc.alert_history_url);

	    var selectedSSC = null;
        // for the list
	    for (var idx = 0; idx < self.SSCHostList().length; idx++) {
	        var sscObj = self.SSCHostList()[idx];
	        if (sscObj.name() === ssc.name()) {
	            selectedSSC = sscObj;
	        }
	        var isSelected = (sscObj.name() === ssc.name());
	        if (sscObj.selected() != isSelected) {
	            sscObj.selected(isSelected);
	        }
	    }

	    // for the overview...
	    for (var idx2 = 0; idx2 < self.SSCHosts().length; idx2++) {
	        var sscObj = self.SSCHosts()[idx2];
	        if (sscObj.name() === ssc.name()) {
	            selectedSSC = sscObj;
	        }
	        var isSelected = (sscObj.name() === ssc.name());
	        if (sscObj.selected() != isSelected) {
	            sscObj.selected(isSelected);
	        }
	    }

	    selectedSSC.isInProgress(true);

	    self.currentSSCStatusDetails(selectedSSC.status_details_info());
	
	    // update recommended actions...
	    AMO.UI.UpdateSSCRecommendedActions();

	    selectedSSC.isInProgress(false);

	    window.setTimeout(function () {
	        AMO.UI.UpdateSSCPreviousNextButtons();
	    }, 1000);
	};

	self.selectSscTab = function (tab) {
	    self.selectedSscTabId(tab.id);
	    var tabs = self.ssc_tabs();
	    for (var t in tabs) {
	        var t2 = tabs[t];
	        t2.selected(t2.id == tab.id);
	    }

	    if (AMO.Model.SSCHostList().length === 0 && tab.id != 3) {
	        return;
	    }

	    var tabHelpContainer = $('#divSSCTabHelpPanelContent .help-container');
	    tabHelpContainer.parent().scrollTop(0);
	    $('#divSscReferenceDetail').hide();

	    switch (tab.id) {
	        case 0:
	            tabHelpContainer.load('../static_contents/help/ssc_overview_help.htm');
	            break;
	        case 1:
	            tabHelpContainer.load('../static_contents/help/ssc_details_help.htm');

	            AMO.UI.ResizeSSCRightPanel();

	            // Override sort of the SSC list drop down...
	            AMO.SSC.SortSSCListAuto();

	            break;
	        case 2:
	            tabHelpContainer.load('../static_contents/help/ssc_plots_help.htm');

	            var FrameGraphContainer = $('#FrameGraphContainerSSC');
	            var initializeGraph = false;
	            if (FrameGraphContainer.length > 0) {
	                initializeGraph = FrameGraphContainer.is(':empty');
	            }
	            var graphType = null;
	            if (AMO.UI.GoToSpecificItem.length > 0) {
	                graphType = AMO.UI.GoToSpecificItem;
	                initializeGraph = true;
	            }

	            if (initializeGraph === true) {
	                AMO.UI.LoadGraphSSC(graphType, function () {

	                    if (graphType != null) {
	                        AMO.UI.UpdatePlotPreviousNextButtons('SSC');
	                    }
	                    // done...
	                    AMO.UI.GoToSpecificItem = '';
	                });
	            }
	            break;
	        case 3:
	            $('#divSscReferenceDetail').hide();
	            $('#divSscReferenceContainer').show();
	            break;
	        default:
	            tabHelpContainer.empty();
	            break;
	    }

	    if (AMO.UI.SuppressHashUpdate == false) {
	        AMO.UI.SetAppHashRoute(self.selectedToolMenuId() + '|' + self.selectedSscTabId(), true);
	    }
	    AMO.UI.ScrollTop(0, 1000);
	};

	self.selectSscTabById = function (id, triggerEvent) {
	    if (typeof triggerEvent == 'undefined') triggerEvent = false;

	    self.selectedSscTabId(id);
	    var tabs = self.ssc_tabs();
	    var selectedTab = null;
	    for (var t in tabs) {
	        var t2 = tabs[t];
	        t2.selected(t2.id == id);

	        if (t2.selected()) {
	            selectedTab = t2;
	        }
	    }

	    if (selectedTab != null) {
	        self.selectSscTab(selectedTab);
	    }

	    AMO.UI.ScrollTop(0, 1000);
	};

	self.selectSscPanel = function (panel) {
	    self.selectedSscPanelId(panel.id);

	    var currPanel = self.ssc_panels()[panel.id];
	    currPanel.selected(!currPanel.selected());
	};
};


// Extending jQuery....
$.fn.forceNumericOnly = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
            // key == 190 || '.'
            return (
            key == 8 ||
            key == 9 ||
            key == 46 ||
            key == 16 ||
            key == 36 ||
            key == 35 ||
            (key >= 37 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
        });
    });
};

$.fn.centerFixed = function (dx, dy) {

    var x = 0, y = 0;
    if (dx != undefined) x = dx;
    if (dy != undefined) y = dy;
    this.css("position", "fixed");
    this.css({ top: '50%', left: '50%', margin: '-' + (($(this).height() + x) / 2) + 'px 0 0 -' + (($(this).width() + y) / 2) + 'px' });

};

$.fn.centerFixedCoor = function () {
    this.css("position", "fixed");
    this.css({ top: '50%', left: '50%', margin: '-' + (($(this).height() + 40) / 2) + 'px 0 0 -' + (($(this).width() + 65) / 2) + 'px' });
};

$.fn.centerAbsolute = function () {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
    return this;
};

$.fn.centerFixedCoorMap = function () {
    this.css("position", "fixed");
    this.css({ top: '50%', left: '50%', margin: '-' + (($(this).height() + 70) / 2) + 'px 0 0 -' + (($(this).width() + 65) / 2) + 'px' });
};

$.fn.centerXFixedCorr = function () {
    this.css("position", "fixed");
    this.css({ left: '50%', "margin-left": '-' + (($(this).width() + 65) / 2) + 'px' });
};

$.fn.centerXAbsolute = function (y) {
    this.css("position", "absolute");
    this.css("top", y + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
};

$.fn.blockMe = function (clientId) {
    if (typeof clientId == 'undefined') {
        clientId = 'divBlockElement';
    }
    this.block({
        message: $('#' + clientId),
        css: {
            border: '1px solid #444444',
            padding: '15px',
            backgroundColor: '#fff',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px',
            opacity: 1.0,
            color: '#000',
            width: '150px'
        },
        // styles for the overlay 
        overlayCSS: {
            backgroundColor: '#fff',
            opacity: 0.3,
            cursor: 'wait'
        },
    });
};

$.fn.unblockMe = function () {
    this.unblock();
};

$.fn.disableMe = function () {
    this.addClass('button-disable');
};

$.fn.enableMe = function () {
    this.removeClass('button-disable');
};

$.fn.scrollTo = function (target, options, callback) {
    if (typeof options == 'function' && arguments.length == 2) { callback = options; options = target; }
    var settings = $.extend({
        scrollTarget: target,
        offsetTop: 0,
        duration: 0,
        easing: 'swing'
    }, options);
    // easing: 'swing', 'linear'
    return this.each(function () {
        var scrollPane = $(this);
        var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
        var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
        scrollPane.animate({ scrollTop: scrollY }, parseInt(settings.duration), settings.easing, function () {
            if (typeof callback == 'function') { callback.call(this); }
        });
    });
};

//// 
//// amoDialog jquery plugin
////
//// Simplifies and unifies the process of reusing Project Specific blockUI Jquery Plugin settings accross 
//// multiple pages.
//// 
//// Basic (default) configuration brings titles/messages at the top and line of button and link at the bottom.
//// 
////    $.amoDialog({
////        title: "Delete Devices",
////        subtitle: "Remove all selected devices and associated device addresses",
////        info: "All addresses associated with each device will be removed after pressing the \"Delete\" button below. This action cannot be undone.",
////        css: { width: '400px',  height: '200px' }
////    });
////
////

(function ($) {

    $.amoDialog = function (opts) { start(window, opts); };
    $.hideamoDialog = function (opts) { stop(window, opts); };

    $.fn.amoDialogX = function (opts) {
        return this.unblock({ fadeOut: 0 }).each(function () {
            if ($.css(this, 'position') == 'static')
                this.style.position = 'relative';
            if ($.browser.msie)
                this.style.zoom = 1; // force 'hasLayout'
            //start(this, opts);
            start(window, opts);
        });
    };


    $.amoDialog.defaults = {
        title: 'Dialog Title',
        subtitle: 'Dialog Subtitle',
        info: 'Dialog Message',
        ownhtml: "",

        buttons: {
            "Ok": function () {
                $.unblockUI();
                AMO.UI.UnBlockPage();
            }
        },

        links: {
            "Cancel": function () {
                $.unblockUI();
                AMO.UI.UnBlockPage();
            }
        },

        formId: "",

        formAction: "",

        css: {
            width: '350px',
            textAlign: 'left',
            height: '220px',
            border: '1px solid #939393',
            padding: '25px 25px 0 25px',
            '-webkit-border-radius': '8px',
            '-moz-border-radius': '8px',
            'border-radius': '8px',
            '-moz-box-shadow':'0px 0px 15px #494949',
            '-webkit-box-shadow': '0px 0px 15px #494949',
            'box-shadow': '0px 0px 15px #494949',
            cursor: 'default'
        },

        overlayCSS: {
            backgroundColor: '#bababa',
            opacity: 0.3,
            cursor: 'default'
        },

        classDialog: {
            display: 'none',
            margin: '0'
        },

        displayButtons: true,

        displayButtonLinks: true,

        progressBar: false,

        progressBarText: "",

        classTop: {
            position: 'relative'
        },

        classBottom: {
            //position: 'absolute',
            //bottom: '30px',
            ////display: 'inline',
            //'border-radius': '5px',
            //'-webkit-border-radius': '5px',
            //'-moz-border-radius': '5px',
            //backgroundColor: '#EEEEEE',
            //padding: '5px 10px 5px 10px'
            position: 'absolute',
            bottom: '15px',
            'border-radius': '5px',
            '-webkit-border-radius': '5px',
            '-moz-border-radius': '5px',
            backgroundColor: '#EEEEEE',
            padding: '10px 5px 10px 5px'
        },

        classTitle: {
            fontFamily: 'Trebuchet MS',
            fontSize: '26px',
            color: '#1e60a0',
            margin: '0',
            padding: '0'
        },

        classSubtitle: {
            fontFamily: 'Verdana, Helvetica, Sans-Serif',
            fontSize: '12px',
            color: '#8d8d8d',
            marginTop: '5px'
        },

        classContent: {
            paddingTop: '0',
            marginTop: '0'
        },

        classInfo: {
            fontFamily: 'Verdana, Helvetica, Sans-Serif',
            fontSize: '11px',
            color: '#552638',
            marginTop: '25px',
            marginBottom: '25px'
        },

        classProgressBarTableColumn: {
            verticalAlign: 'middle'
        },

        classProgressBarLabel: {
            fontSize: '12px',
            color: '#1e60a0'
        },

        classSeparator: {
            margin: '4px',
            color: '#cccccc',
            fontSize: '14px'
        },

        classTableButtons: {
            padding: '0',
            margin: '0'
        },

        classTableButtonColumn: {
            'vertical-align': 'middle',
            paddingLeft: '5px',
            paddingRight: '5px'
        },

        classButtonLink: {
            fontFamily: 'Verdana, Helvetica, Sans-Serif',
            fontSize: '11pt',
            textDecoration: 'underline',
            color: '#1e60a0'
        },

        classButton: {
            fontFamily: 'Verdana, Helvetica, Sans-Serif',
            fontSize: '11pt',
            cursor: 'pointer'
        },

        baseZIndex: 1000
    };

    $.fn.amoDialog = function (opts) {
        return start(this, opts);
    };

    $.fn.hideamoDialog = function (opts) {
        return stop(this, opts);
    };

    function start(el, opts) {

        var opts = $.extend({}, $.amoDialog.defaults, opts || {});
        var _css = $.extend({}, $.amoDialog.defaults.css, opts.css || {});
        var _overlayCSS = $.extend({}, $.amoDialog.defaults.overlayCSS, opts.overlayCSS || {});
        var _classDialog = $.extend({}, $.amoDialog.defaults.classDialog, opts.classDialog || {});
        var _classTop = $.extend({}, $.amoDialog.defaults.classTop, opts.classTop || {});
        var _classBottom = $.extend({}, $.amoDialog.defaults.classBottom, opts.classBottom || {});
        var _classTitle = $.extend({}, $.amoDialog.defaults.classTitle, opts.classTitle || {});
        var _classSubtitle = $.extend({}, $.amoDialog.defaults.classSubtitle, opts.classSubtitle || {});
        var _classContent = $.extend({}, $.amoDialog.defaults.classContent, opts.classContent || {});
        var _classInfo = $.extend({}, $.amoDialog.defaults.classInfo, opts.classInfo || {});
        var _classTableButtons = $.extend({}, $.amoDialog.defaults.classTableButtons, opts.classTableButtons || {});
        var _classTableButtonColumn = $.extend({}, $.amoDialog.defaults.classTableButtonColumn, opts.classTableButtonColumn || {});
        var _classButtonLink = $.extend({}, $.amoDialog.defaults.classButtonLink, opts.classButtonLink || {});
        var _classButton = $.extend({}, $.amoDialog.defaults.classButton, opts.classButton || {});
        var _classSeparator = $.extend({}, $.amoDialog.defaults.classSeparator, opts.classSeparator || {});
        var _classProgressBarTableColumn = $.extend({}, $.amoDialog.defaults.classProgressBarTableColumn, opts.classProgressBarTableColumn || {});
        var _classProgressBarLabel = $.extend({}, $.amoDialog.defaults.classProgressBarLabel, opts.classProgressBarLabel || {});

        var _zIndex = opts.baseZIndex;

        var _displayButtons = opts.displayButtons;
        var _displayButtonLinks = opts.displayButtonLinks;
        var _progressBar = opts.progressBar;
        var _progressBarText = opts.progressBarText;
        var _ownhtml = opts.ownhtml;
        var _formId = opts.formId;
        var _formAction = opts.formAction;

        var _buttons = (opts.buttons) ? opts.buttons : $.extend({}, $.amoDialog.defaults.buttons);
        var _links = (opts.links) ? opts.links : $.extend({}, $.amoDialog.defaults.links);

        var dialogDiv = $("<div></div>").css(_classDialog);
        var top = $("<div></div>").css(_classTop);
        var bottom = $("<div></div>").css(_classBottom);

        var title = $("<div>" + opts.title + "</div>").css(_classTitle);
        $(title).appendTo(top);
        var subtitle = $("<div>" + opts.subtitle + "</div>").css(_classSubtitle);
        $(subtitle).appendTo(top);
        var message = $('<p></p>').css(_classInfo);
        message.text(opts.info);
        var messageDiv = $("<div></div>").css(_classContent);
        $(messageDiv).appendTo(top);
        $(message).appendTo(messageDiv);


        if (_progressBar) {
            var tblProgressBar = $('<table cellpadding="0" cellspacing="0" border="0"></table>');
            var tblProgressBarRow = $('<tr></tr>').css(_classProgressBarTableColumn);
            var tblProgressBarColumnImage = $('<td></td>').css(_classProgressBarTableColumn);
            var tblProgressBarColumnLabel = $('<td></td>').css(_classProgressBarTableColumn);
            var tblProgressBarColumnSpace = $('<td>&nbsp;&nbsp;</td>');
            var tblProgressBarLabel = $('<label>' + _progressBarText + '</label>').css(_classProgressBarLabel);
            var tblProgressBarImage = $("<img src='/images/ajax_progress.gif' />");

            $(tblProgressBarImage).appendTo(tblProgressBarColumnImage);
            $(tblProgressBarColumnImage).appendTo(tblProgressBarRow);
            $(tblProgressBarColumnSpace).appendTo(tblProgressBarRow);
            $(tblProgressBarLabel).appendTo(tblProgressBarColumnLabel);
            $(tblProgressBarColumnLabel).appendTo(tblProgressBarRow);

            $(tblProgressBarRow).appendTo(tblProgressBar);

            var progressBar = $("<div></div>").append(tblProgressBar);
            $(progressBar).appendTo(top);
        }

        var ownDiv = $("<div></div>").html(_ownhtml);
        $(ownDiv).appendTo(top);

        var btnTable = $('<table cellpadding="0" cellspacing="0" border="0"></table>').css(_classTableButtons);
        var btnRow = $('<tr></tr>');
        var separator = $('<td></td>').css(_classSeparator);

        if (_displayButtons) {
            var btn_index = 0;
            $.each(_buttons, function (name, fn) {
                if (btn_index > 0) {
                    $(separator).appendTo(btnRow);
                }
                var btnCol = $('<td></td>').css(_classTableButtonColumn);
                //var inputControl = $('<input type="button"></input>').css(_classButton);
                //$(inputControl).val(name);
                var inputControl = $('<div class="button dark-gray"></div>').css(_classButton);
                $(inputControl).text(name);
                //$(inputControl).click(function () { $.unblockUI(); fn.apply(this, arguments); });
                // $(inputControl).click(function () { fn.apply(this, arguments); });
                $(inputControl).on('touchclick', function () { fn.apply(this, arguments); });
                $(inputControl).appendTo(btnCol);
                $(btnCol).appendTo(btnRow);
                btn_index++;
            });
        }

        if (_displayButtonLinks) {
            $(separator).appendTo(btnRow);

            var lnk_index = 0;

            $.each(_links, function (name, fn) {
                if (lnk_index > 0) {
                    $(separator).appendTo(btnRow);
                }
                var btnCol = $('<td></td>').css(_classTableButtonColumn);
                var linkControl = $('<a href="#"></a>').css(_classButtonLink);
                $(linkControl).text(name);
                // $(linkControl).click(function () { $.unblockUI(); fn.apply(this, arguments); });
                $(linkControl).on('touchclick', function () { $.unblockUI(); fn.apply(this, arguments); });
                $(linkControl).appendTo(btnCol);
                $(btnCol).appendTo(btnRow);
                lnk_index++;
            });
        }

        if (_displayButtons || _displayButtonLinks) {
            $(btnRow).appendTo(btnTable);
            $(btnTable).appendTo(bottom);
        }

        if (_formAction != "") {
            var form = $("<form method='post'></form>");
            $(form).attr("action", _formAction);
            if (_formId != "") {
                $(form).attr("id", _formId);
            }

            $(top).appendTo(form);

            if (_displayButtons || _displayButtonLinks) {
                $(bottom).appendTo(form);
            }
            $(form).appendTo(dialogDiv);
        }
        else {
            $(top).appendTo(dialogDiv);
            if (_displayButtons || _displayButtonLinks) {
                $(bottom).appendTo(dialogDiv);
            }
        }

        //        $.blockUI({ message: $(dialogDiv),
        //        	fadeIn:  20,
        //        	fadeOut:  40,
        //            css: _css,
        //            overlayCSS: _overlayCSS
        //        });


        $.blockUI({
            message: $(dialogDiv),
            fadeIn: 400,
            fadeOut: 40,
            css: _css,
            overlayCSS: _overlayCSS,
            baseZ: _zIndex
        });
        $('.blockUI.blockMsg').centerFixedCoor();
    }

    function stop(el, opts) {
        $.unblockUI();
    }
})(jQuery);

var LoadFiles = (function ($, host) {
    // begin to load external templates from a given path and inject them into the DOM
    return {
        // use jQuery $.get to load the templates asynchronously
        load: function (templateArray, target, callback) {
            var defferArray = [];
            $(target).hide();
            $.each(templateArray, function (idx, url) {
                var loader = $.get(url)
                    .success(function (data) {
                        // on success, add the template to the targeted DOM element
                        $(target).append(data);
                    })
                defferArray.push(loader);
            })

            $.when.apply(null, defferArray).done(function () {
                // $(host).trigger(event);
                $(target).show('fade', {}, 500);
                if (typeof callback != 'undefined') {
                    callback();
                }
            });
        },
        loadSequentially: function (templateArray, target, callback) {
            var t = $(target);

            // t.hide();
            var fileIndex = 0;
            function loadfile() {
                if (fileIndex < templateArray.length) {
                    var url = templateArray[fileIndex];
                    if ($.trim(url) != '') {
                        $.get(url).success(function (data) {
                            t.append(data);
                            fileIndex++;
                            window.setTimeout(loadfile, 100);
                        }).error(function () {
                            fileIndex++;
                            window.setTimeout(loadfile, 100);
                        });
                    } else {
                        fileIndex++;
                        window.setTimeout(loadfile, 100);
                    }
                } else {
                    // done....
                    // t.show('fade', {}, 200);
                    if (typeof callback != 'undefined') {
                        callback();
                    }
                }
            };
            loadfile();
        }
    };
})(jQuery, document);

// http://stackoverflow.com/questions/13655919/how-to-bind-both-mousedown-and-touchstart-but-not-respond-to-both-android-jqu
// touch click helper
(function ($) {
    $.fn.tclick = function (onclick) {
        this.bind("touchstart", function (e) { onclick.call(this, e); e.stopPropagation(); e.preventDefault(); });
        this.bind("click", function (e) { onclick.call(this, e); });   //substitute mousedown event for exact same result as touchstart         
        return this;
    };
})(jQuery);

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
var eventType = isMobile ? "touchstart" : "click";

jQuery.event.special.touchclick = {
    bindType: eventType,
    delegateType: eventType
};

// ============= PROTOTYPE =============================================
// Native Javascript object extenders...
//String.prototype.bool = function () {
//    return (/^true$/i).test(this);
//};

Date.prototype.getDayOfYear2 = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((this - onejan) / 86400000);
};

//Array.prototype.swapElementsByIndex = function (a, b) {
//    var temp = this[a];
//    this[a] = this[b];
//    this[b] = temp;
//};

//Date.prototype.toUTCArray = function () {
//    var D = this;
//    return [D.getUTCFullYear(), D.getUTCMonth(), D.getUTCDate(), D.getUTCHours(),
//    D.getUTCMinutes(), D.getUTCSeconds()];
//};

//Date.prototype.toISO = function () {
//    var tem, A = this.toUTCArray(), i = 0;
//    A[1] += 1;
//    while (i++ < 7) {
//        tem = A[i];
//        if (tem < 10) A[i] = '0' + tem;
//    }
//    return A.splice(0, 3).join('-') + 'T' + A.join(':');
//};

// The following is from DATE.JS but it's using floor instead of .ceil -- the above seems to be the correct approach 
//Date.prototype.getDayOfYear = function () {
//   return Math.floor((this - new Date(this.getFullYear(), 0, 1)) / 86400000);
//};


//Array.prototype.inArray = function (value, caseSensitive)
//    // Returns true if the passed value is found in the
//    // array. Returns false if it is not.
//{
//    if (typeof caseSensitive == 'undefined') {
//        caseSensitive = false;
//    }
//    var i;
//    for (i = 0; i < this.length; i++) {
//        // use === to check for Matches. ie., identical (===),
//        if (caseSensitive == false) {	//performs match even the string is case sensitive
//            if (this[i].toLowerCase() == value.toLowerCase()) {
//                return true;
//            }
//        } else {
//            if (this[i] == value) {
//                return true;
//            }
//        }
//    }
//    return false;
//};