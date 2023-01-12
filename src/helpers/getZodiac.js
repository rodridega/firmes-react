export const getZodiac = (month, day) => {

    var datecode = month * 100 + day; //this will give us a number represent month and day
    if (datecode <= 120) {        // Jan 20
        return "Capricornio";
    } else if (datecode <= 219) { // Feb 19
        return "Acuario";
    } else if (datecode <= 320) { // Mar 20
        return "Piscis";
    } else if (datecode <= 420) { // Apr 20
        return "Aries";
    } else if (datecode <= 520) { // May 20
        return "Tauro";
    } else if (datecode <= 621) { // Jun 21
        return "Geminis";
    } else if (datecode <= 722) { // Jul 22
        return "Cancer";
    } else if (datecode <= 822) { // Aug 22 -- Wikipedia says that it's Aug 23 but then
        //           but then it starts again with Aug 23 so I
        // don't know what's up with that.
        return "Leo";
    } else if (datecode <= 921) { // Sept 21
        return "Virgo";
    } else if (datecode <= 1022) { // Oct 22
        return "Libra";
    } else if (datecode <= 1121) { // Nov 21
        return "Escorpio";
    } else if (datecode <= 1221) { // Dec 21
        return "Sagitario";
    } else { //if we hit this case it means we hava greater date code than Dec 21
        return "Capricornio";
    }

}