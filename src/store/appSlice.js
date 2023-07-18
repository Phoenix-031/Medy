/* eslint-disable no-unused-vars */
export const appSlice = (set) => ({
    user: null,
    contractaddress: '0x884A11c837D4134DfF46b8eB911596EB0663b009',
    // contractaddress: '0xaDDe79837E3b26c391670dE5bE9b433Cb0Ab6215',
    setUser: (user) => set(() => ({ user })),
    doctorwallet : ['0x6C98c0800FE906865f90a3db2d2aB45F87b7E9d4','0xaB08112249Ece980FE179AB29086CC6305273ae6','0x93BdA32F17f908C6a80f711aDCAeb686e68FE217'],
    adminwallet : ['0xaB08112249Ece980FE179AB29086CC6305273ae6']
});
