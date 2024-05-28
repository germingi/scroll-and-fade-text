/* __placeholder__ */
import ScrollAndFadeText from "./components/ScrollAndFadeText.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
let __VLS_modelEmitsType;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scrolling-container") }, });
    // @ts-ignore
    [ScrollAndFadeText,];
    const __VLS_0 = __VLS_asFunctionalComponent(ScrollAndFadeText, new ScrollAndFadeText({ text: ("a really long string that is going to scroll and fade"), }));
    const __VLS_1 = __VLS_0({ text: ("a really long string that is going to scroll and fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({ text: ("a really long string that is going to scroll and fade"), }));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(ScrollAndFadeText, __VLS_1);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['scrolling-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    const __VLS_internalComponent = (await import('vue')).defineComponent({
        setup() {
            return {
                ScrollAndFadeText: ScrollAndFadeText,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
