import dayjs from 'dayjs';
// 格式化时间戳
export const timestamp2Date = (timestamp, format = 'YYYY-MM-DD') => {
    if (timestamp.toString().length < 13) {
        return undefined;
    }
    return dayjs(timestamp).format(format);
};
timestamp2Date(1624161696000, 'YYYY/MM/DD HH:mm:ss');
timestamp2Date(1624161696000, 'YYYY/MM/DD HH:MM:ss');
