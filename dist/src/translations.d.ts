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
export declare function getTranslations(language: string): Translations;
export declare function detectLanguage(hass: any): string;
//# sourceMappingURL=translations.d.ts.map