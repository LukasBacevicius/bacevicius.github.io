export default {
    default: (toAnimate: Array<string> = ['all'], duration: string = '.3s'): string => toAnimate.map(item => `${item} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94)`).join(',')
}