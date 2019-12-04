const getColorObject = (light: {}, dark: {} = light) => ({ light, dark });

export default {
    background: getColorObject(
        {
            100: '#F2F3F4',
            90: '#fff'
        },
        {
            100: '#252935',
            90: '#2C3040'
        }
    ),
    grayscale: getColorObject(
        {
            0: '#fff',
            10: '#D6D7D7',
            60: '#595D5F',
            70: '#9B9E9F',
            80: '#595D5F',
            90: '#222222',
            100: '#000'
        },
        {
            100: '#fff',
            90: '#D6D7D7',
            80: '#595D5F',
            70: '#9B9E9F',
            60: '#595D5F',
            10: '#222222',
            0: '#000'
        }
    ),
    typography: getColorObject(
        {
            100: '#2C3040'
        },
        {
            100: '#fff'
        }),
    blue: getColorObject({
        100: '#0D74FF',
        50: '#D9E7FD'
    }),
    red: getColorObject({
        100: '#F74237',
        50: '#FFEBF4'
    })
};