import { __get } from ".";

/**
 * picking a slice of redux state
 * @param name - slice name
 * @example <caption>for example picking data field of services state: </caption>
 * useSelector(select('services.data'), shallowEqual);
 * @returns فانکشنی را ریترن میکند که آن فانکشن استیت را از یوزسلکتور گرفته و اسلایس مورد نظر را ریترن میکند
 */
export const select = (name) => (state) => __get(state, name);
