/* eslint-disable no-unused-vars */
export const appSlice = (set) => ({
    user: null,
    contractaddress: '0x884A11c837D4134DfF46b8eB911596EB0663b009',
    // contractaddress: '0xaDDe79837E3b26c391670dE5bE9b433Cb0Ab6215'
    setUser: (user) => set(() => ({ user })),
});
