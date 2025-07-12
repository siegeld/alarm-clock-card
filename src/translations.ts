export interface Translations {
  card: {
    title: string;
    set_time: string;
    enable_alarm: string;
    disable_alarm: string;
    snooze: string;
    dismiss: string;
    next_alarm: string;
    alarm_in: string;
    snooze_ends_in: string;
    snoozed: string;
    until: string;
    use_24_hour_format: string;
    settings: string;
  };
  status: {
    off: string;
    armed: string;
    ringing: string;
    snoozed: string;
  };
  days: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
  };
}

const translations: { [key: string]: Translations } = {
  en: {
    card: {
      title: 'Alarm Clock',
      set_time: 'Set Time',
      enable_alarm: 'Enable Alarm',
      disable_alarm: 'Disable Alarm',
      snooze: 'Snooze',
      dismiss: 'Dismiss',
      next_alarm: 'Next alarm',
      alarm_in: 'Alarm in:',
      snooze_ends_in: 'Snooze ends in:',
      snoozed: 'Snoozed',
      until: 'Until',
      use_24_hour_format: 'Use 24-hour format',
      settings: 'Settings',
    },
    status: {
      off: 'OFF',
      armed: 'ARMED',
      ringing: 'RINGING',
      snoozed: 'SNOOZED',
    },
    days: {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      mon: 'Mon',
      tue: 'Tue',
      wed: 'Wed',
      thu: 'Thu',
      fri: 'Fri',
      sat: 'Sat',
      sun: 'Sun',
    },
  },
  de: {
    card: {
      title: 'Wecker',
      set_time: 'Zeit einstellen',
      enable_alarm: 'Wecker aktivieren',
      disable_alarm: 'Wecker deaktivieren',
      snooze: 'Schlummern',
      dismiss: 'Ausschalten',
      next_alarm: 'Nächster Wecker',
      alarm_in: 'Wecker in:',
      snooze_ends_in: 'Schlummern endet in:',
      snoozed: 'Schlummert',
      until: 'Bis',
      use_24_hour_format: '24-Stunden-Format verwenden',
      settings: 'Einstellungen',
    },
    status: {
      off: 'AUS',
      armed: 'AKTIV',
      ringing: 'KLINGELT',
      snoozed: 'SCHLUMMERT',
    },
    days: {
      monday: 'Montag',
      tuesday: 'Dienstag',
      wednesday: 'Mittwoch',
      thursday: 'Donnerstag',
      friday: 'Freitag',
      saturday: 'Samstag',
      sunday: 'Sonntag',
      mon: 'Mo',
      tue: 'Di',
      wed: 'Mi',
      thu: 'Do',
      fri: 'Fr',
      sat: 'Sa',
      sun: 'So',
    },
  },
  es: {
    card: {
      title: 'Despertador',
      set_time: 'Establecer hora',
      enable_alarm: 'Activar alarma',
      disable_alarm: 'Desactivar alarma',
      snooze: 'Posponer',
      dismiss: 'Descartar',
      next_alarm: 'Próxima alarma',
      alarm_in: 'Alarma en:',
      snooze_ends_in: 'Posposición termina en:',
      snoozed: 'Pospuesta',
      until: 'Hasta',
      use_24_hour_format: 'Usar formato de 24 horas',
      settings: 'Configuración',
    },
    status: {
      off: 'APAGADA',
      armed: 'ARMADA',
      ringing: 'SONANDO',
      snoozed: 'POSPUESTA',
    },
    days: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
      mon: 'Lun',
      tue: 'Mar',
      wed: 'Mié',
      thu: 'Jue',
      fri: 'Vie',
      sat: 'Sáb',
      sun: 'Dom',
    },
  },
  fr: {
    card: {
      title: 'Réveil',
      set_time: 'Définir l\'heure',
      enable_alarm: 'Activer le réveil',
      disable_alarm: 'Désactiver le réveil',
      snooze: 'Reporter',
      dismiss: 'Arrêter',
      next_alarm: 'Prochain réveil',
      alarm_in: 'Réveil dans:',
      snooze_ends_in: 'Report se termine dans:',
      snoozed: 'Reporté',
      until: 'Jusqu\'à',
      use_24_hour_format: 'Utiliser le format 24 heures',
      settings: 'Paramètres',
    },
    status: {
      off: 'ARRÊTÉ',
      armed: 'ARMÉ',
      ringing: 'SONNERIE',
      snoozed: 'REPORTÉ',
    },
    days: {
      monday: 'Lundi',
      tuesday: 'Mardi',
      wednesday: 'Mercredi',
      thursday: 'Jeudi',
      friday: 'Vendredi',
      saturday: 'Samedi',
      sunday: 'Dimanche',
      mon: 'Lun',
      tue: 'Mar',
      wed: 'Mer',
      thu: 'Jeu',
      fri: 'Ven',
      sat: 'Sam',
      sun: 'Dim',
    },
  },
};

export function getTranslations(language: string): Translations {
  // Extract base language code (e.g., 'en-US' -> 'en')
  const baseLang = language.split('-')[0].toLowerCase();
  
  // Return translations for the language, fallback to English
  return translations[baseLang] || translations.en;
}

export function detectLanguage(hass: any): string {
  // Try to get language from Home Assistant
  return hass?.language || hass?.user?.language || navigator.language || 'en';
}
