const nconf=require("nconf");
nconf.use('file', { file: './config.json' });
nconf.load();
const SunRiseSet = require('sunrise-sunset-js');
const schedule = require('node-schedule');

const LONGITUDE=6.85;
const LATITUDE=48.4;

class Manager {

    constructor() {
        let sunset=new Date(this.getSunset().setMinutes(this.getSunset().getMinutes()+this.getSunsetAddon()));
        let sunrise=new Date(this.getSunrise().setMinutes(this.getSunrise().getMinutes()+this.getSunriseAddon()));
        this.fermeture = schedule.scheduleJob({hour:sunset.getHours(), minute:sunset.getMinutes()}, this.fermer);
        this.ouverture = schedule.scheduleJob({ hour:sunrise.getHours(), minute:sunrise.getMinutes() }, this.ouvrir);
        this.state={etat:""}
    }
    setObservable = (state) => this.state=state;

    setEtat=(etat)=>{
        this.state.etat=etat;
        this.state.callback();
    }

    checkEtat=()=>{
        this.setEtat("undefined");
    }


    getSunrise = () => SunRiseSet.getSunrise(LATITUDE,LONGITUDE);

    getSunset = () => SunRiseSet.getSunset(LATITUDE,LONGITUDE);

    getSunriseAddon = () => parseInt(nconf.get('addon').sunrise);

    getSunsetAddon  = () => parseInt(nconf.get('addon').sunset);

    ouvrir = () => {
        if(this.state.etat==="pending" || this.state.etat==="open") return;
        else this.setEtat("pending");

        setTimeout(()=>{
            this.setEtat("open");
        },10000);

        return;
    }

    fermer = () => {
        if(this.state.etat==="pending" || this.state.etat==="closed") return;
        else this.setEtat("pending");

        setTimeout(()=>{
            this.setEtat("closed");
        },10000);

        return;
    }

    setSunrise = (add,callback) => {
        nconf.set('addon:sunrise', add||"0");
        nconf.save(()=>{
            let sunrise=new Date(this.getSunrise().setMinutes(this.getSunrise().getMinutes()+this.getSunriseAddon()));
            this.ouverture.reschedule({ hour:sunrise.getHours(), minute:sunrise.getMinutes() });
            callback();
        });


    }
    setSunset = (add,callback) => {
        nconf.set('addon:sunset', add||"0");
        nconf.save(()=>{
            let sunset=new Date(this.getSunset().setMinutes(this.getSunset().getMinutes()+this.getSunsetAddon()));
            this.fermeture.reschedule({ hour:sunset.getHours(), minute:sunset.getMinutes() });
            callback();
        });


    }
}

module.exports=new Manager();
