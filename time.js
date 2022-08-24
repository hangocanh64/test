$(document).ready(function () {
    let oldClassName;
    let oldClassTmsName;
    function getCurrentTimestamp() {
        var curDate = new Date();
        var hours = curDate.getHours();
        var minutes = curDate.getMinutes();
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        var time = String(hours) + String(minutes);
        return Number(time);
    }
    function displayHightLight() {
        var curentTime = getCurrentTimestamp();
        var currentDate = new Date().toISOString().slice(0, 10);
        var selectedDate = document.getElementById('hidden_select-date');
        // TODO--TMS要検証
        var name_array = [1000, 1030, 1100, 1130, 1200, 1230, 1300, 1330, 1400, 1430, 1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2130, 2200];
        for (var i = 0; i < name_array.length; i++) {
            if (selectedDate) {
                if (selectedDate.value == currentDate) {
                    setClassGridTime(curentTime, name_array[i]);
                }
            }
            else {
                setClassGridTime(curentTime, name_array[i]);
            }
        }
    }

    function displayHightLightTms() {
        var curentTime = getCurrentTimestamp();
        var name_array = [1000, 1020, 1040, 1100, 1120, 1140, 1200, 1220, 1240, 1300, 1320, 1340, 1400, 1420, 1440, 1500, 1520, 1540, 1600, 1620, 1640, 1700, 1720, 1740, 1800, 1820, 1840, 1900, 1920, 1940];
        var className;
        for (var i = 0; i < name_array.length; i++) {
            if (curentTime - name_array[i] >= -1 && curentTime - name_array[i] < 19) {
                $('#schedule_grid_tms_time').removeClass(oldClassTmsName);
                className = 'time_' + name_array[i];

                $('#schedule_grid_tms_time').addClass(className);
                oldClassTmsName = className;
            }
            else if (name_array[i] - curentTime == 41) {
                $('#schedule_grid_tms_time').removeClass(oldClassTmsName);
                className = 'time_' + name_array[i];

                $('#schedule_grid_tms_time').addClass(className);
                oldClassTmsName = className;
            }
        }
    }
    function setClassGridTime(curentTime, time) {
        var className;
        if (curentTime - time >= -1 && curentTime - time < 29) {
            $("#calendar_grid_time").removeClass(oldClassName);
            $('#schedule_grid_time').removeClass(oldClassName);
            className = 'time_' + time;

            $("#calendar_grid_time").addClass(className);
            $('#schedule_grid_time').addClass(className);
            oldClassName = className;
        }
        else if (time - curentTime == 41) {
            $("#calendar_grid_time").removeClass(oldClassName);
            $('#schedule_grid_time').removeClass(oldClassName);
            className = 'time_' + time;
            $("#calendar_grid_time").addClass(className);
            $('#schedule_grid_time').addClass(className);
            oldClassName = className;
        }
    }
    setTimeout(function () {
        displayHightLight();
        displayHightLightTms();
        setInterval(function () {
            displayHightLight();
            displayHightLightTms();
        }, 1000);
    }, 1000)
});