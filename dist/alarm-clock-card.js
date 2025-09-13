import*as e from"lit";import*as t from"lit/decorators.js";var i={d:(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const s=(a={LitElement:()=>e.LitElement,css:()=>e.css,html:()=>e.html},n={},i.d(n,a),n);var a,n;const o=(e=>{var t={};return i.d(t,e),t})({customElement:()=>t.customElement,property:()=>t.property,state:()=>t.state});var r,d,l;(l=r||(r={})).language="language",l.system="system",l.comma_decimal="comma_decimal",l.decimal_comma="decimal_comma",l.space_comma="space_comma",l.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(d||(d={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var c=function(e,t,i,s){s=s||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return a.detail=i,e.dispatchEvent(a),a};new Set(["call-service","divider","section","weblink","cast","select"]);const u={en:{card:{title:"Alarm Clock",set_time:"Set Time",enable_alarm:"Enable Alarm",disable_alarm:"Disable Alarm",snooze:"Snooze",dismiss:"Dismiss",next_alarm:"Next alarm",alarm_in:"Alarm in:",snooze_ends_in:"Snooze ends in:",snoozed:"Snoozed",until:"Until",use_24_hour_format:"Use 24-hour format",settings:"Settings"},status:{off:"OFF",armed:"ARMED",ringing:"RINGING",snoozed:"SNOOZED"},days:{monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat",sun:"Sun"}},de:{card:{title:"Wecker",set_time:"Zeit einstellen",enable_alarm:"Wecker aktivieren",disable_alarm:"Wecker deaktivieren",snooze:"Schlummern",dismiss:"Ausschalten",next_alarm:"Nächster Wecker",alarm_in:"Wecker in:",snooze_ends_in:"Schlummern endet in:",snoozed:"Schlummert",until:"Bis",use_24_hour_format:"24-Stunden-Format verwenden",settings:"Einstellungen"},status:{off:"AUS",armed:"AKTIV",ringing:"KLINGELT",snoozed:"SCHLUMMERT"},days:{monday:"Montag",tuesday:"Dienstag",wednesday:"Mittwoch",thursday:"Donnerstag",friday:"Freitag",saturday:"Samstag",sunday:"Sonntag",mon:"Mo",tue:"Di",wed:"Mi",thu:"Do",fri:"Fr",sat:"Sa",sun:"So"}},es:{card:{title:"Despertador",set_time:"Establecer hora",enable_alarm:"Activar alarma",disable_alarm:"Desactivar alarma",snooze:"Posponer",dismiss:"Descartar",next_alarm:"Próxima alarma",alarm_in:"Alarma en:",snooze_ends_in:"Posposición termina en:",snoozed:"Pospuesta",until:"Hasta",use_24_hour_format:"Usar formato de 24 horas",settings:"Configuración"},status:{off:"APAGADA",armed:"ARMADA",ringing:"SONANDO",snoozed:"POSPUESTA"},days:{monday:"Lunes",tuesday:"Martes",wednesday:"Miércoles",thursday:"Jueves",friday:"Viernes",saturday:"Sábado",sunday:"Domingo",mon:"Lun",tue:"Mar",wed:"Mié",thu:"Jue",fri:"Vie",sat:"Sáb",sun:"Dom"}},fr:{card:{title:"Réveil",set_time:"Définir l'heure",enable_alarm:"Activer le réveil",disable_alarm:"Désactiver le réveil",snooze:"Reporter",dismiss:"Arrêter",next_alarm:"Prochain réveil",alarm_in:"Réveil dans:",snooze_ends_in:"Report se termine dans:",snoozed:"Reporté",until:"Jusqu'à",use_24_hour_format:"Utiliser le format 24 heures",settings:"Paramètres"},status:{off:"ARRÊTÉ",armed:"ARMÉ",ringing:"SONNERIE",snoozed:"REPORTÉ"},days:{monday:"Lundi",tuesday:"Mardi",wednesday:"Mercredi",thursday:"Jeudi",friday:"Vendredi",saturday:"Samedi",sunday:"Dimanche",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Jeu",fri:"Ven",sat:"Sam",sun:"Dim"}},sl:{card:{title:"Budilka",set_time:"Nastavi čas",enable_alarm:"Vključi budilko",disable_alarm:"Izključi budilko",snooze:"Odloži",dismiss:"Ustavi",next_alarm:"Naslednja budilka",alarm_in:"Budilka čez:",snooze_ends_in:"Odlog se konča čez:",snoozed:"Odloženo",until:"Do",use_24_hour_format:"Uporabi 24-urni format",settings:"Nastavitve"},status:{off:"IZKLOPLJENO",armed:"VKLOPLJENO",ringing:"ZVONI",snoozed:"ODLOŽENO"},days:{monday:"Ponedeljek",tuesday:"Torek",wednesday:"Sreda",thursday:"Četrtek",friday:"Petek",saturday:"Sobota",sunday:"Nedelja",mon:"Pon",tue:"Tor",wed:"Sre",thu:"Čet",fri:"Pet",sat:"Sob",sun:"Ned"}},zh:{card:{title:"闹钟",set_time:"设置时间",enable_alarm:"启用闹钟",disable_alarm:"禁用闹钟",snooze:"小睡",dismiss:"关闭",next_alarm:"下次闹钟",alarm_in:"闹钟将在：",snooze_ends_in:"小睡结束时间：",snoozed:"小睡中",until:"直到",use_24_hour_format:"使用24小时格式",settings:"设置"},status:{off:"关闭",armed:"已设置",ringing:"响铃中",snoozed:"小睡中"},days:{monday:"星期一",tuesday:"星期二",wednesday:"星期三",thursday:"星期四",friday:"星期五",saturday:"星期六",sunday:"星期日",mon:"周一",tue:"周二",wed:"周三",thu:"周四",fri:"周五",sat:"周六",sun:"周日"}},ja:{card:{title:"アラーム時計",set_time:"時刻設定",enable_alarm:"アラーム有効",disable_alarm:"アラーム無効",snooze:"スヌーズ",dismiss:"停止",next_alarm:"次のアラーム",alarm_in:"アラームまで：",snooze_ends_in:"スヌーズ終了まで：",snoozed:"スヌーズ中",until:"まで",use_24_hour_format:"24時間表示を使用",settings:"設定"},status:{off:"オフ",armed:"セット済み",ringing:"鳴動中",snoozed:"スヌーズ中"},days:{monday:"月曜日",tuesday:"火曜日",wednesday:"水曜日",thursday:"木曜日",friday:"金曜日",saturday:"土曜日",sunday:"日曜日",mon:"月",tue:"火",wed:"水",thu:"木",fri:"金",sat:"土",sun:"日"}},ko:{card:{title:"알람 시계",set_time:"시간 설정",enable_alarm:"알람 켜기",disable_alarm:"알람 끄기",snooze:"다시 알림",dismiss:"해제",next_alarm:"다음 알람",alarm_in:"알람까지：",snooze_ends_in:"다시 알림 종료까지：",snoozed:"다시 알림 중",until:"까지",use_24_hour_format:"24시간 형식 사용",settings:"설정"},status:{off:"꺼짐",armed:"설정됨",ringing:"울림",snoozed:"다시 알림"},days:{monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일",sunday:"일요일",mon:"월",tue:"화",wed:"수",thu:"목",fri:"금",sat:"토",sun:"일"}},ru:{card:{title:"Будильник",set_time:"Установить время",enable_alarm:"Включить будильник",disable_alarm:"Выключить будильник",snooze:"Повтор",dismiss:"Отключить",next_alarm:"Следующий будильник",alarm_in:"Будильник через:",snooze_ends_in:"Повтор закончится через:",snoozed:"Повтор",until:"До",use_24_hour_format:"Использовать 24-часовой формат",settings:"Настройки"},status:{off:"ВЫКЛ",armed:"ВКЛ",ringing:"ЗВОНИТ",snoozed:"ПОВТОР"},days:{monday:"Понедельник",tuesday:"Вторник",wednesday:"Среда",thursday:"Четверг",friday:"Пятница",saturday:"Суббота",sunday:"Воскресенье",mon:"Пн",tue:"Вт",wed:"Ср",thu:"Чт",fri:"Пт",sat:"Сб",sun:"Вс"}},pt:{card:{title:"Despertador",set_time:"Definir horário",enable_alarm:"Ativar alarme",disable_alarm:"Desativar alarme",snooze:"Soneca",dismiss:"Dispensar",next_alarm:"Próximo alarme",alarm_in:"Alarme em:",snooze_ends_in:"Soneca termina em:",snoozed:"Soneca",until:"Até",use_24_hour_format:"Usar formato 24 horas",settings:"Configurações"},status:{off:"DESLIGADO",armed:"LIGADO",ringing:"TOCANDO",snoozed:"SONECA"},days:{monday:"Segunda-feira",tuesday:"Terça-feira",wednesday:"Quarta-feira",thursday:"Quinta-feira",friday:"Sexta-feira",saturday:"Sábado",sunday:"Domingo",mon:"Seg",tue:"Ter",wed:"Qua",thu:"Qui",fri:"Sex",sat:"Sáb",sun:"Dom"}},it:{card:{title:"Sveglia",set_time:"Imposta orario",enable_alarm:"Attiva sveglia",disable_alarm:"Disattiva sveglia",snooze:"Posticipa",dismiss:"Interrompi",next_alarm:"Prossima sveglia",alarm_in:"Sveglia tra:",snooze_ends_in:"Posticipo termina tra:",snoozed:"Posticipata",until:"Fino a",use_24_hour_format:"Usa formato 24 ore",settings:"Impostazioni"},status:{off:"SPENTO",armed:"ATTIVO",ringing:"SUONA",snoozed:"POSTICIPATO"},days:{monday:"Lunedì",tuesday:"Martedì",wednesday:"Mercoledì",thursday:"Giovedì",friday:"Venerdì",saturday:"Sabato",sunday:"Domenica",mon:"Lun",tue:"Mar",wed:"Mer",thu:"Gio",fri:"Ven",sat:"Sab",sun:"Dom"}},nl:{card:{title:"Wekker",set_time:"Tijd instellen",enable_alarm:"Wekker inschakelen",disable_alarm:"Wekker uitschakelen",snooze:"Sluimeren",dismiss:"Uitschakelen",next_alarm:"Volgende wekker",alarm_in:"Wekker over:",snooze_ends_in:"Sluimeren eindigt over:",snoozed:"Sluimert",until:"Tot",use_24_hour_format:"Gebruik 24-uurs formaat",settings:"Instellingen"},status:{off:"UIT",armed:"AAN",ringing:"GAAT AF",snoozed:"SLUIMERT"},days:{monday:"Maandag",tuesday:"Dinsdag",wednesday:"Woensdag",thursday:"Donderdag",friday:"Vrijdag",saturday:"Zaterdag",sunday:"Zondag",mon:"Ma",tue:"Di",wed:"Wo",thu:"Do",fri:"Vr",sat:"Za",sun:"Zo"}},he:{card:{title:"שעון מעורר",set_time:"הגדר שעה",enable_alarm:"הפעל מעורר",disable_alarm:"בטל מעורר",snooze:"נודניק",dismiss:"כבה",next_alarm:"המעורר הבא",alarm_in:"מעורר בעוד:",snooze_ends_in:"הנודניק מסתיים בעוד:",snoozed:"נודניק",until:"עד",use_24_hour_format:"השתמש בפורמט 24 שעות",settings:"הגדרות"},status:{off:"כבוי",armed:"פעיל",ringing:"מצלצל",snoozed:"נודניק"},days:{monday:"יום שני",tuesday:"יום שלישי",wednesday:"יום רביעי",thursday:"יום חמישי",friday:"יום שישי",saturday:"יום שבת",sunday:"יום ראשון",mon:"ב׳",tue:"ג׳",wed:"ד׳",thu:"ה׳",fri:"ו׳",sat:"ש׳",sun:"א׳"}},ar:{card:{title:"ساعة المنبه",set_time:"تحديد الوقت",enable_alarm:"تشغيل المنبه",disable_alarm:"إيقاف المنبه",snooze:"غفوة",dismiss:"إلغاء",next_alarm:"المنبه التالي",alarm_in:"المنبه خلال:",snooze_ends_in:"انتهاء الغفوة خلال:",snoozed:"غفوة",until:"حتى",use_24_hour_format:"استخدم تنسيق 24 ساعة",settings:"الإعدادات"},status:{off:"مغلق",armed:"مضبوط",ringing:"يرن",snoozed:"غفوة"},days:{monday:"الاثنين",tuesday:"الثلاثاء",wednesday:"الأربعاء",thursday:"الخميس",friday:"الجمعة",saturday:"السبت",sunday:"الأحد",mon:"اث",tue:"ثل",wed:"أرب",thu:"خم",fri:"جم",sat:"سبت",sun:"أحد"}},hi:{card:{title:"अलार्म घड़ी",set_time:"समय सेट करें",enable_alarm:"अलार्म चालू करें",disable_alarm:"अलार्म बंद करें",snooze:"स्नूज़",dismiss:"बंद करें",next_alarm:"अगला अलार्म",alarm_in:"अलार्म में:",snooze_ends_in:"स्नूज़ समाप्त होगा:",snoozed:"स्नूज़ किया गया",until:"तक",use_24_hour_format:"24 घंटे का प्रारूप उपयोग करें",settings:"सेटिंग्स"},status:{off:"बंद",armed:"सेट",ringing:"बज रहा है",snoozed:"स्नूज़"},days:{monday:"सोमवार",tuesday:"मंगलवार",wednesday:"बुधवार",thursday:"गुरुवार",friday:"शुक्रवार",saturday:"शनिवार",sunday:"रविवार",mon:"सोम",tue:"मंगल",wed:"बुध",thu:"गुरु",fri:"शुक्र",sat:"शनि",sun:"रवि"}}};var h=function(e,t,i,s){var a,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let m=class extends s.LitElement{constructor(){super(...arguments),this._showSettingsMenu=!1,this.entities={}}static async getConfigElement(){return document.createElement("alarm-clock-card-editor")}static getStubConfig(){return{type:"custom:alarm-clock-card",device_id:"",name:"Alarm Clock",show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0}}get _translations(){var e;return function(e){const t=e.split("-")[0].toLowerCase();return u[t]||u.en}(this.hass?(e=this.hass,e?.language||e?.user?.language||navigator.language||"en"):"en")}_debug(e,...t){this.config?.debug&&console.log(e,...t)}_debugError(e,...t){this.config?.debug?console.error(e,...t):console.error(e.replace("🔍 ALARM CARD: ","ALARM CARD: "),...t)}setConfig(e){if(!e.device_id)throw new Error("You need to define a device_id");this.config={show_time_picker:!0,show_days:!0,show_scripts:!0,show_snooze_info:!0,...e}}shouldUpdate(e){return this._debug("🔍 ALARM CARD: shouldUpdate called",{hasConfig:!!this.config,hasHass:!!this.hass,hasEntities:Object.keys(this.entities).length>0,changedProps:Array.from(e.keys())}),this.config?(e.has("hass")&&this.hass&&this.config&&(0===Object.keys(this.entities).length?(this._debug("🔍 ALARM CARD: No entities yet, calling _updateEntities"),this._updateEntities()):(this._debug("🔍 ALARM CARD: Refreshing entity states"),this._refreshEntityStates())),e.has("config")||e.has("hass")||e.has("entities")):(this._debug("🔍 ALARM CARD: No config, returning false"),!1)}_refreshEntityStates(){let e=!1;const t={...this.entities,days:{...this.entities.days}};for(const[i,s]of Object.entries(this.entities))if("days"!==i&&s&&s.entity_id){const a=this.hass.states[s.entity_id];!a||a.state===s.state&&a.last_updated===s.last_updated||(this._debug(`🔍 ALARM CARD: ${i} entity changed:`,s.state,"→",a.state),t[i]=a,e=!0)}if(this.entities.days)for(const[i,s]of Object.entries(this.entities.days))if(s&&s.entity_id){const a=this.hass.states[s.entity_id];!a||a.state===s.state&&a.last_updated===s.last_updated||(this._debug(`🔍 ALARM CARD: Day ${i} entity changed:`,s.state,"→",a.state),t.days[i]=a,e=!0)}e&&(this._debug("🔍 ALARM CARD: Changes detected, updating entities object"),this.entities=t)}async _updateEntities(){if(this.hass&&this.config.device_id){this._debug("🔍 ALARM CARD: Looking for entities for device:",this.config.device_id);try{const e=await this.hass.callWS({type:"config/entity_registry/list"});this._debug("🔍 ALARM CARD: Entity registry loaded, total entities:",e.length);const t=e.filter(e=>e.device_id===this.config.device_id);this._debug("🔍 ALARM CARD: Found device entities:",t.length,t);let i=null;for(const e of t)if(e.unique_id&&e.entity_id.startsWith("sensor.")&&e.unique_id&&!e.unique_id.includes("_")){i=e.unique_id,this._debug("🔍 ALARM CARD: Found coordinator unique_id:",i);break}if(!i)return this._debugError("🔍 ALARM CARD: Could not find coordinator unique_id"),void(this.entities={});const s={days:{}};this._debug("🔍 ALARM CARD: Processing device entities using unique_id patterns:");for(const e of t){if(this._debug("🔍 ALARM CARD: Checking entity:",e.entity_id,"unique_id:",e.unique_id),!e.unique_id){this._debug("🔍 ALARM CARD: No unique_id found for:",e.entity_id);continue}const t=this.hass.states[e.entity_id],a=e.unique_id;if(a===i)this._debug("🔍 ALARM CARD: Found MAIN entity:",e.entity_id),s.main=t||{entity_id:e.entity_id,state:"unknown"};else if(a===`${i}_alarm_time`)this._debug("🔍 ALARM CARD: Found TIME entity:",e.entity_id),s.time=t||{entity_id:e.entity_id,state:"07:00"};else if(a===`${i}_alarm_enabled`)this._debug("🔍 ALARM CARD: Found MAIN ENABLED entity:",e.entity_id),s.enabled=t||{entity_id:e.entity_id,state:"off"};else if(a===`${i}_alarm_status`)this._debug("🔍 ALARM CARD: Found STATUS entity:",e.entity_id),s.status=t||{entity_id:e.entity_id,state:"off"};else if(a===`${i}_next_alarm`)this._debug("🔍 ALARM CARD: Found NEXT_ALARM entity:",e.entity_id),s.nextAlarm=t||{entity_id:e.entity_id,state:null};else if(a===`${i}_time_until_alarm`)this._debug("🔍 ALARM CARD: Found TIME_UNTIL entity:",e.entity_id),s.timeUntil=t||{entity_id:e.entity_id,state:null};else if(a.startsWith(`${i}_`)&&a!==`${i}_alarm_enabled`){const i=a.match(/_(\w+)$/);if(i&&"enabled"!==i[1]){const a=i[1];["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].includes(a)&&(this._debug("🔍 ALARM CARD: Found DAY entity:",e.entity_id,a),s.days[a]=t||{entity_id:e.entity_id,state:"off"})}}else this._debug("🔍 ALARM CARD: Unmatched entity:",e.entity_id,a)}this._debug("🔍 ALARM CARD: Final mapped entities:",s),this._debug("🔍 ALARM CARD: Entity count - main:",!!s.main,"time:",!!s.time,"enabled:",!!s.enabled,"days:",Object.keys(s.days||{}).length),this.entities=s}catch(e){this._debugError("🔍 ALARM CARD: Error loading entity registry:",e),this.entities={}}}else this._debugError("🔍 ALARM CARD: Missing hass or device_id:",{hass:!!this.hass,device_id:this.config.device_id})}render(){if(!this.config||0===Object.keys(this.entities).length)return s.html`
        <ha-card>
          <div class="warning">
            ${this.config?`Device not available: ${this.config.device_id}`:"No configuration"}
          </div>
        </ha-card>
      `;const e=this.entities.time?.entity_id?this.hass.states[this.entities.time.entity_id]:null,t=this.entities.enabled?.entity_id?this.hass.states[this.entities.enabled.entity_id]:null,i=this.entities.main?.entity_id?this.hass.states[this.entities.main.entity_id]:null,a=e?.state||"07:00",n=this._formatTime(a),o="on"===t?.state,r=i?.state||"off";this._debug("🔍 ALARM CARD: Status logic debug (FRESH DATA):",{timeEntityId:this.entities.time?.entity_id,enabledEntityId:this.entities.enabled?.entity_id,mainEntityId:this.entities.main?.entity_id,enabledEntityFreshState:t?.state,mainEntityFreshState:i?.state,isEnabled:o,finalStatus:r});const d=this.entities.nextAlarm?.attributes||{},l=this.entities.timeUntil?.attributes||{},c=this.entities.nextAlarm?.state,u=d.next_alarm_day,h=l.human_readable,m=l.countdown_type,_=Object.keys(this.entities.days||{}).filter(e=>"on"===this.entities.days[e]?.state);return this._debug("🎯 ALARM CARD: Rendering with entity states:",{alarmTime:n,isEnabled:o,status:r,nextAlarm:c,nextAlarmDay:u,timeUntil:h,countdownType:m,enabledDays:_,entities:this.entities}),s.html`
      <ha-card @click=${this._handleCardClick}>
        <div class="card-content">
          <div class="header">
            <div class="title">${this.config.name||this._translations.card.title}</div>
            <div class="header-right">
              <div class="status ${r}">${this._getStatusTranslation(r)}</div>
              <div class="settings-menu">
                <button 
                  class="settings-button"
                  @click=${this._toggleSettingsMenu}
                  title="Settings"
                >
                  ⋮
                </button>
                ${this._showSettingsMenu?this._renderSettingsMenu():""}
              </div>
            </div>
          </div>

          <div class="time-display">
            <div class="alarm-time">${n}</div>
            ${c&&u?s.html`<div class="next-alarm">${this._translations.card.next_alarm}: ${u} at ${this._formatTime(new Date(c).toTimeString().substring(0,5))}</div>`:s.html``}
            ${h?s.html`
                  <div class="countdown">
                    <span class="countdown-label">
                      ${"snooze"===m?this._translations.card.snooze_ends_in:this._translations.card.alarm_in}
                    </span>
                    <span class="countdown-time">${h}</span>
                  </div>
                `:s.html``}
          </div>

          ${this.config.show_time_picker?this._renderTimePicker():s.html``}
          ${this._renderControls(o,r)}
          ${this.config.show_days?this._renderDays(_):s.html``}
          ${this.config.show_snooze_info&&"snoozed"===r?this._renderSnoozeInfo():s.html``}
        </div>
      </ha-card>
    `}_renderTimePicker(){const e=this.entities.time?.state||"07:00";return s.html`
      <div class="time-picker">
        <input
          type="time"
          class="time-input"
          id="alarm-time-input"
          .value=${e}
          value=${e}
          step="60"
          lang="en-GB"
          @change=${this._onTimeInputChange}
        />
        <mwc-button
          @click=${this._onSetTimeButtonClick}
          class="set-time-button"
        >
          ${this._translations.card.set_time}
        </mwc-button>
      </div>
    `}_renderControls(e,t){return s.html`
      <div class="controls">
        <mwc-button
          raised
          class="control-button ${e?"danger":"primary"}"
          @click=${this._toggleAlarm}
        >
          ${e?this._translations.card.disable_alarm:this._translations.card.enable_alarm}
        </mwc-button>
        ${"ringing"===t?s.html`
              <mwc-button
                outlined
                class="control-button secondary"
                @click=${this._snoozeAlarm}
              >
                ${this._translations.card.snooze}
              </mwc-button>
              <mwc-button
                raised
                class="control-button danger"
                @click=${this._dismissAlarm}
              >
                ${this._translations.card.dismiss}
              </mwc-button>
            `:s.html``}
      </div>
    `}_renderDays(e){return s.html`
      <div class="days-grid">
        ${["monday","tuesday","wednesday","thursday","friday","saturday","sunday"].map(t=>{const i=e.includes(t);return s.html`
              <button
                class="day-button ${i?"active":""}"
                @click=${()=>this._toggleDay(t)}
              >
                ${this._getDayTranslation(t)}
              </button>
            `})}
      </div>
    `}_renderScriptsInfo(e){const t=[];return e.pre_alarm_enabled&&e.pre_alarm_script&&t.push({label:"Pre-alarm",value:`${e.pre_alarm_script} (${e.pre_alarm_minutes}m before)`}),e.alarm_script&&t.push({label:"Alarm",value:e.alarm_script}),e.post_alarm_enabled&&e.post_alarm_script&&t.push({label:"Post-alarm",value:`${e.post_alarm_script} (${e.post_alarm_minutes}m after)`}),0===t.length?s.html``:s.html`
      <div class="scripts-info">
        <div class="scripts-title">Configured Scripts</div>
        ${t.map(e=>s.html`
            <div class="script-item">
              <span class="script-label">${e.label}:</span>
              <span class="script-value">${e.value}</span>
            </div>
          `)}
      </div>
    `}_renderSnoozeInfo(){const e=this.entities.timeUntil?.attributes||{},t=e.snooze_count||0,i=this.entities.main?.attributes?.max_snoozes||3,a=e.snooze_until;return s.html`
      <div class="snooze-info">
        <div>${this._translations.card.snoozed} (${t}/${i})</div>
        ${a?s.html`<div>${this._translations.card.until}: ${this._formatTime(new Date(a).toTimeString().substring(0,5))}</div>`:s.html``}
      </div>
    `}_onTimeInputChange(e){}_onSetTimeButtonClick(e){const t=this.shadowRoot?.querySelector("#alarm-time-input");if(t){const e=t.value;this._setAlarmTime(e)}}_setAlarmTime(e){this._debug("⏰ ALARM CARD: Setting alarm time to:",e),e&&this.config.device_id?(this._debug("⏰ ALARM CARD: Calling alarm_clock.set_alarm service:",{device_id:this.config.device_id,time:e}),this.hass.callService("alarm_clock","set_alarm",{device_id:this.config.device_id,time:e}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot set time - missing time or device_id:",{time:e,device_id:this.config.device_id})}_toggleAlarm(){if(this._debug("🔘 ALARM CARD: Toggle alarm button clicked"),!this.config.device_id||!this.hass)return void this._debugError("ALARM CARD: Cannot toggle alarm - no device_id found");const e="on"===this.entities.enabled?.state,t=e?"turn_off":"turn_on";this._debug("🔘 ALARM CARD: Toggling alarm via switch:",{device_id:this.config.device_id,currentEnabled:e,service:t}),this.hass.callService("switch",t,{entity_id:this.entities.enabled?.entity_id}),setTimeout(()=>this._refreshEntityStates(),100)}async _toggleDay(e){if(this._debug("📅 ALARM CARD: Toggle day clicked:",e),!this.config.device_id)return void this._debugError("ALARM CARD: Cannot toggle day - no device_id found:",e);const t=this.entities.days?.[e];if(!t)return void this._debugError("ALARM CARD: Cannot toggle day - no day entity found:",e);const i="on"===t.state,s=i?"turn_off":"turn_on";this._debug("📅 ALARM CARD: Toggling day switch:",{day:e,device_id:this.config.device_id,currentEnabled:i,service:s}),await this.hass.callService("switch",s,{entity_id:t.entity_id}),this._debug("📅 ALARM CARD: Service call completed, forcing refresh"),setTimeout(()=>this._refreshEntityStates(),100)}_snoozeAlarm(){this._debug("💤 ALARM CARD: Snooze button clicked"),this.config.device_id?(this._debug("💤 ALARM CARD: Calling snooze service:",this.config.device_id),this.hass.callService("alarm_clock","snooze",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot snooze - no device_id found")}_dismissAlarm(){this._debug("🛑 ALARM CARD: Dismiss button clicked"),this.config.device_id?(this._debug("🛑 ALARM CARD: Calling dismiss service:",this.config.device_id),this.hass.callService("alarm_clock","dismiss",{device_id:this.config.device_id}),setTimeout(()=>this._refreshEntityStates(),100)):this._debugError("ALARM CARD: Cannot dismiss - no device_id found")}_formatTime(e){return e&&"off"!==e?this.config.use_24_hour_format?e:this._formatTime12Hour(e):e}_formatTime12Hour(e){if(!e||"off"===e)return e;try{const[t,i]=e.split(":"),s=parseInt(t,10),a=parseInt(i,10),n=s>=12?"PM":"AM";return`${0===s?12:s>12?s-12:s}:${a.toString().padStart(2,"0")} ${n}`}catch(t){return e}}_getStatusTranslation(e){const t=e.toLowerCase();return this._translations.status[t]||e.toUpperCase()}_getDayTranslation(e){const t={monday:"mon",tuesday:"tue",wednesday:"wed",thursday:"thu",friday:"fri",saturday:"sat",sunday:"sun"}[e.toLowerCase()]||e.toLowerCase();return this._translations.days[t]||e.charAt(0).toUpperCase()+e.slice(1)}_toggleSettingsMenu(){this._showSettingsMenu=!this._showSettingsMenu}_renderSettingsMenu(){return s.html`
      <div class="settings-dropdown" @click=${this._handleSettingsClick}>
        <label class="settings-option">
          <input
            type="checkbox"
            .checked=${this.config.use_24_hour_format||!1}
            @change=${this._toggle24HourFormat}
          />
          ${this._translations.card.use_24_hour_format}
        </label>
      </div>
    `}_handleSettingsClick(e){e.stopPropagation()}_toggle24HourFormat(e){const t=e.target.checked;this.config={...this.config,use_24_hour_format:t},c(this,"config-changed",{config:this.config}),this._showSettingsMenu=!1}_handleCardClick(e){this._showSettingsMenu&&!e.target?.closest(".settings-menu")&&(this._showSettingsMenu=!1)}getCardSize(){return 6}static get styles(){return s.css`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
      }

      .card-content {
        padding: 24px;
      }

      .warning {
        display: block;
        color: var(--error-color);
        font-weight: 500;
        padding: 16px;
        text-align: center;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .title {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .status {
        font-size: 14px;
        padding: 4px 12px;
        border-radius: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .settings-menu {
        position: relative;
      }

      .settings-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 18px;
        padding: 8px;
        cursor: pointer;
        color: #ffffff;
        border-radius: 50%;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        opacity: 0.8;
      }

      .settings-button:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        opacity: 1;
        transform: scale(1.05);
      }

      .settings-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        min-width: 200px;
        z-index: 1000;
        padding: 8px;
      }

      .settings-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .settings-option:hover {
        background-color: var(--secondary-background-color);
      }

      .settings-option input[type="checkbox"] {
        margin: 0;
        cursor: pointer;
      }

      .status.off {
        background: var(--error-color);
        color: white;
      }
      .status.armed {
        background: var(--success-color);
        color: white;
      }
      .status.ringing {
        background: var(--warning-color);
        color: white;
        animation: blink 1s infinite;
      }
      .status.snoozed {
        background: var(--info-color);
        color: white;
      }

      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        51%,
        100% {
          opacity: 0.3;
        }
      }

      .time-display {
        text-align: center;
        margin: 20px 0;
      }

      .alarm-time {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .next-alarm {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .countdown {
        margin-top: 8px;
      }

      .countdown-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        display: block;
        margin-bottom: 4px;
      }

      .countdown-time {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-color);
      }

      .time-picker {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 20px 0;
      }

      .time-input {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        font-size: 16px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .set-time-button {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .controls {
        display: flex;
        gap: 12px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .control-button {
        flex: 1;
        min-width: 120px;
      }

      .control-button.primary {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .control-button.secondary {
        --mdc-theme-primary: var(--secondary-text-color);
        --mdc-theme-on-primary: var(--primary-text-color);
      }

      .control-button.danger {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .days-grid {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        margin: 20px 0;
        overflow: visible;
      }

      .day-button {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        border: none;
        outline: none;
        box-shadow: none;
        min-width: 40px;
        flex: 1;
        max-width: calc((100% - 30px) / 7);
        height: 36px;
        font-size: 11px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }

      .day-button:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
      }

      .day-button.active {
        background: #ff9800;
        color: #ffffff;
        box-shadow: 0 2px 4px rgba(255, 152, 0, 0.3);
      }

      .day-button.active:hover {
        background: #e68900;
        transform: translateY(-1px);
      }

      .scripts-info {
        margin-top: 20px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: 8px;
      }

      .scripts-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
      }

      .script-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 14px;
        flex-wrap: wrap;
        gap: 8px;
      }

      .script-label {
        color: var(--secondary-text-color);
      }

      .script-value {
        color: var(--primary-text-color);
        font-weight: 500;
        text-align: right;
        flex: 1;
      }

      .snooze-info {
        margin-top: 16px;
        padding: 12px;
        background: var(--warning-color);
        color: white;
        border-radius: 8px;
        text-align: center;
      }

      @media (max-width: 600px) {
        .card-content {
          padding: 16px;
        }

        .alarm-time {
          font-size: 36px;
        }

        .controls {
          flex-direction: column;
        }

        .control-button {
          flex: none;
        }

        .script-item {
          flex-direction: column;
          gap: 4px;
        }

        .script-value {
          text-align: left;
        }
      }
    `}};h([(0,o.property)({attribute:!1})],m.prototype,"hass",void 0),h([(0,o.state)()],m.prototype,"config",void 0),h([(0,o.state)()],m.prototype,"_showSettingsMenu",void 0),h([(0,o.state)()],m.prototype,"entities",void 0),m=h([(0,o.customElement)("alarm-clock-card")],m),window.customCards=window.customCards||[],window.customCards.push({type:"alarm-clock-card",name:"Alarm Clock Card",description:"A card for displaying and controlling alarm clock entities",preview:!0,documentationURL:"https://github.com/siegeld/alarm-clock"}),console.info("%c  ALARM-CLOCK-CARD  %c  Version 2.0.17  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");var _=function(e,t,i,s){var a,n=arguments.length,o=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let g=class extends s.LitElement{constructor(){super(...arguments),this._searchValue="",this._showDropdown=!1,this._filteredDevices=[],this._allDevices=[]}setConfig(e){this._config=e}get _device_id(){return this._config?.device_id||""}get _name(){return this._config?.name||""}get _show_time_picker(){return!1!==this._config?.show_time_picker}get _show_days(){return!1!==this._config?.show_days}get _show_scripts(){return!1!==this._config?.show_scripts}get _show_snooze_info(){return!1!==this._config?.show_snooze_info}get _use_24_hour_format(){return this._config?.use_24_hour_format||!1}render(){return this.hass&&this._config?s.html`
      <div class="card-config">
        <div class="option">
          <label>Alarm Clock Device (Required)</label>
          <div class="device-picker">
            <input
              type="text"
              class="device-input"
              placeholder="Search for alarm clock device..."
              .value=${this._searchValue}
              @input=${this._handleSearch}
              @focus=${this._showResults}
              @blur=${this._hideResults}
            />
            <div class="results-dropdown" ?hidden=${!this._showDropdown}>
              ${this._filteredDevices.map(e=>s.html`
                <div class="result-item" @click=${()=>this._selectDevice(e)}>
                  <div class="device-name">${e.name}</div>
                  <div class="device-info">Device ID: ${e.id}</div>
                </div>
              `)}
            </div>
          </div>
        </div>

        <div class="option">
          <label>Card Name (Optional)</label>
          <ha-textfield
            .value=${this._name}
            placeholder="Alarm Clock"
            @input=${this._nameChanged}
          ></ha-textfield>
        </div>

        <div class="option switches-section">
          <label>Display Options</label>
          
          <ha-formfield label="Show time picker">
            <ha-switch
              .checked=${this._show_time_picker}
              @change=${e=>this._toggleChanged("show_time_picker",e)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show day toggles">
            <ha-switch
              .checked=${this._show_days}
              @change=${e=>this._toggleChanged("show_days",e)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show scripts info">
            <ha-switch
              .checked=${this._show_scripts}
              @change=${e=>this._toggleChanged("show_scripts",e)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Show snooze info when snoozed">
            <ha-switch
              .checked=${this._show_snooze_info}
              @change=${e=>this._toggleChanged("show_snooze_info",e)}
            ></ha-switch>
          </ha-formfield>
          
          <ha-formfield label="Use 24-hour format">
            <ha-switch
              .checked=${this._use_24_hour_format}
              @change=${e=>this._toggleChanged("use_24_hour_format",e)}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>
    `:s.html``}async _loadDevices(){if(this.hass)try{const e=await this.hass.callWS({type:"config/device_registry/list"});this._allDevices=e.filter(e=>"Alarm Clock Integration"===e.manufacturer||"Alarm Clock"===e.model||e.name&&e.name.toLowerCase().includes("alarm")).map(e=>({id:e.id,name:e.name_by_user||e.name||`Device ${e.id.substring(0,8)}`,manufacturer:e.manufacturer,model:e.model})),this._filteredDevices=this._allDevices}catch(e){console.error("Failed to load device registry:",e),this._allDevices=[],this._filteredDevices=[]}}_handleSearch(e){const t=e.target,i=t.value.toLowerCase();this._searchValue=t.value,0===i.length?this._filteredDevices=this._allDevices:this._filteredDevices=this._allDevices.filter(e=>e.name.toLowerCase().includes(i)||e.id.toLowerCase().includes(i)),this._showDropdown=!0}_showResults(){0===this._allDevices.length&&this._loadDevices(),this._showDropdown=!0}_hideResults(){setTimeout(()=>{this._showDropdown=!1},150)}_selectDevice(e){this._searchValue=e.name,this._showDropdown=!1,this._config={...this._config,device_id:e.id},c(this,"config-changed",{config:this._config})}_nameChanged(e){if(!this._config||!this.hass)return;const t=e.target.value;this._config={...this._config,name:t},c(this,"config-changed",{config:this._config})}_toggleChanged(e,t){if(!this._config||!this.hass)return;const i=t.target.checked;this._config={...this._config,[e]:i},c(this,"config-changed",{config:this._config})}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,i=t.configValue;if(this[`_${i}`]===t.value)return;let s;s="checkbox"===t.type?t.checked:t.value,i&&(this._config={...this._config,[i]:s}),c(this,"config-changed",{config:this._config})}static get styles(){return s.css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 16px;
      }

      .option {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .option label {
        font-weight: 500;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      ha-entity-picker {
        width: 100%;
      }

      ha-textfield {
        width: 100%;
      }

      ha-formfield {
        display: flex;
        align-items: center;
        margin: 8px 0;
      }

      .switches-section {
        border-top: 1px solid var(--divider-color);
        padding-top: 16px;
      }

      ha-switch {
        flex-shrink: 0;
      }

      .device-picker {
        position: relative;
        width: 100%;
      }

      .device-input {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 4px;
        font-size: 14px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
        box-sizing: border-box;
      }

      .device-input:focus {
        outline: none;
        border-color: var(--primary-color);
      }

      .results-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-top: none;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        max-height: 200px;
        overflow-y: auto;
        z-index: 999;
      }

      .result-item {
        padding: 12px;
        cursor: pointer;
        border-bottom: 1px solid var(--divider-color);
        transition: background-color 0.2s;
      }

      .result-item:hover {
        background-color: var(--secondary-background-color);
      }

      .result-item:last-child {
        border-bottom: none;
      }

      .device-name {
        font-weight: 500;
        color: var(--primary-text-color);
        margin-bottom: 2px;
      }

      .device-info {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `}};_([(0,o.property)({attribute:!1})],g.prototype,"hass",void 0),_([(0,o.state)()],g.prototype,"_config",void 0),_([(0,o.state)()],g.prototype,"_helpers",void 0),_([(0,o.state)()],g.prototype,"_searchValue",void 0),_([(0,o.state)()],g.prototype,"_showDropdown",void 0),_([(0,o.state)()],g.prototype,"_filteredDevices",void 0),_([(0,o.state)()],g.prototype,"_allDevices",void 0),g=_([(0,o.customElement)("alarm-clock-card-editor")],g);