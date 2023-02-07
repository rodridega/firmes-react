

export const getZodiac = (month, day) => {

    var datecode = month * 100 + day; //this will give us a number represent month and day
    if (datecode <= 120) {        // Jan 20
        return {
            img: "/src/assets/capricorn.png",
            sign: "CAPRICORN"
        };
    } else if (datecode <= 219) { // Feb 19
        return {
            img: "/src/assets/aquarius.png",
            sign: "AQUARIUS"
        };
    } else if (datecode <= 320) { // Mar 20
        return {
            img: "/src/assets/pisces.png",
            sign: "PISCES"
        };
    } else if (datecode <= 420) { // Apr 20
        return {
            img: "/src/assets/aries.png",
            sign: "ARIES"
        };
    } else if (datecode <= 520) { // May 20
        return {
            img: "/src/assets/taurus.png",
            sign: "TAURUS"
        };
    } else if (datecode <= 621) { // Jun 21
        return {
            img: "/src/assets/gemini.png",
            sign: "GEMINI"
        };
    } else if (datecode <= 722) { // Jul 22
        return {
            img: "/src/assets/cancer.png",
            sign: "CANCER"
        };
    } else if (datecode <= 822) { // Aug 22 -- Wikipedia says that it's Aug 23 but then
        //           but then it starts again with Aug 23 so I
        // don't know what's up with that.
        return {
            img: "/src/assets/leo.png",
            sign: "LEO"
        };
    } else if (datecode <= 921) { // Sept 21
        return {
            img: "/src/assets/virgo.png",
            sign: "VIRGO"
        };
    } else if (datecode <= 1022) { // Oct 22
        return {
            img: "/src/assets/libra.png",
            sign: "LIBRA"
        };
    } else if (datecode <= 1121) { // Nov 21
        return {
            img: "/src/assets/scorpio.png",
            sign: "SCORPIO"
        };
    } else if (datecode <= 1221) { // Dec 21
        return {
            img: "/src/assets/sagittarius.png",
            sign: "SAGITTARIUS"
        };
    } else { //if we hit this case it means we hava greater date code than Dec 21
        return {
            img: "/src/assets/capricorn.png",
            sign: "CAPRICORN"
        };
    }

}