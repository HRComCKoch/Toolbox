function formatToVizFrame(date) {
    const inputDate = new Date(date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    return `${month}-${day}-${year}`;
}
function formatToDatePicker(date) {
    const inputDate = new Date(date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    return `${year}-${month}-${day}`;
}
function formatToPopOver(date) {
    var parts = date.split("-");
    var month = parts[0];
    var day = parts[1].padStart(2, '0');
    var year = parts[2];
    var months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
    return `${day}. ${months[month - 1]} ${year}`;
}
// function isClosedLbu(date) {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const formattedDate = `${year}${month}${day}`;
//     return (formattedDate > date);
// }
function msg(text) {
    sap.m.MessageToast.show(text, {
        duration: 3000,
        width: "15em",
        my: "center bottom",
        at: "center bottom",
        of: window,
        offset: "0 -50",
        collision: "fit fit",
        onClose: null,
        autoClose: true,
        animationTimingFunction: "ease",
        animationDuration: 500,
        closeOnBrowserNavigation: true
    });
}
function msgError(error) {
    msg(parseError(error));
}
function msgStreamError(error) {
    msg(parseStreamError(error));
}
function parseError(error) {
    const rsp = error.responseText;
    const p0 = rsp.indexOf("message");
    const p1 = rsp.substring(p0).indexOf("value");
    const p2 = rsp.substring(p0).indexOf("}");
    return rsp.substring(p0 + p1 + 8, p0 + p2 - 1);
}
function parseStreamError(error) {
    debugger
    const rsp = error.response.body;
    const p0 = rsp.indexOf("<message xml:lang=\"de\">");
    const p1 = rsp.indexOf("</message>");
    return rsp.substring(p0 + 23, p1);
}
// function getText(key) {
//     jQuery.sap.require("jquery.sap.resources");
//     const oBundle = jQuery.sap.resources({
//         url: "sap/bc/ui5_ui5/i18n.properties",
//         locale: sap.ui.getCore().getConfiguration().getLanguage()
//     });
//     return oBundle.getText(key);
// }
function getIntegerFromDecimal(value) {
    if (!value) {
        return "";
    }
    const fmtOptions = {
        currencyCode: true,
        showMeasure: true,
        maxFractionDigits: 2
    };
    const locale = new sap.ui.core.Locale("de-DE");
    const currencyFormat = sap.ui.core.format.NumberFormat.getCurrencyInstance(fmtOptions, locale);
    return currencyFormat.format(value);
}
function formatLfdnr(value) {
    return value.replace(/^0+/, '');
}

function validateTimeInputAndSetStateForBeguz(beguz, enduz) {
    let isSmaller = true;
    var timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    var toInt = function (oTimePicker) {
        var sTime = oTimePicker.getValue();
        return parseInt(sTime.replace(":", ""), 10);
    };
    if (toInt(beguz) > toInt(enduz)) {
        isSmaller = false;
    } else {
        isSmaller = true;
    }
    if (timeRegex.test(beguz) | !isSmaller)
        beguz.setValueState(sap.ui.core.ValueState.Error);
    else
        beguz.setValueState(sap.ui.core.ValueState.Success);
}
function validateTimeInputAndSetStateForEnguz(beguz, enduz) {
    let isSmaller = true;
    var timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    var toInt = function (oTimePicker) {
        var sTime = oTimePicker.getValue();
        return parseInt(sTime.replace(":", ""), 10);
    };
    if (toInt(beguz) > toInt(enduz)) {
        isSmaller = false;
    } else {
        isSmaller = true;
    }
    if (timeRegex.test(enduz) | !isSmaller)
        enduz.setValueState(sap.ui.core.ValueState.Error);
    else
        enduz.setValueState(sap.ui.core.ValueState.Success);
}
function extractFirstDateFromDateRangePicker(date) {
    var dates = date.split(" ");
    return dates[0];
}
function extractSecondDateFromDateRangePicker(date) {
    var dates = date.split(" ");
    return dates[2];
}
function formatSewi(sewi) {
    switch (sewi) {
        case 'S':
            return 'Success';
        case 'E':
            return 'Error';
        case 'W':
            return 'Warning';
        case 'I':
            return 'Information';
    }
}
function setStateError(control) {
    control.setValueState(sap.ui.core.ValueState.Error);
}
function setStateNone(control) {
    control.setValueState(sap.ui.core.ValueState.None);
}
function deleteLeadingZeros(input) {
    return parseInt(input, 10);
}