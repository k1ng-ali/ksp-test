export interface IData_SnippetNews {
    ID : number        // идентификатор новости
    TI : string         // заголовок новости
    AB : string         // содержимое на новости
    URL: string         // ссылка на новости
    DOM: string         // домен
    DP : string         // дата и время публикации новости в формате "%Y-%m-%dT%H:%M:%S"
    LANG      : string                  // язык новости
    REACH     : number                  // охват новости
    KW        : IData_TagItem[]         // ключевые слова
    AU        : string[]                // автор новости
    CNTR      : string                  // страна
    CNTR_CODE : string                  // код страны
    SENT      : string                  // сантимент новости
    TRAFFIC   : IData_TrafficItem[]     // траффик из страны
    FAV       : string                  // ссылка на иконку
    HIGHLIGHTS: string[]                // блоки содержимого новости с ключевыми словами
}

export interface IData_TagItem {
    value: string               // название тега
    count: number               // количество тегов с указанным
}

export interface IData_TrafficItem  {
    value: string               // название страны-источник траффика
    count: number               // объём траффика для указанной
}
