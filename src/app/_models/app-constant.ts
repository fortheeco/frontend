

export const CustomApplicationConstant = {
    organizationType: [
        {key: 'ngo', value: 'Non-Governmental Organization'},
        {key: 'sme', value: 'Small and Mid-size Enterprise'},
        {key: 'charity', value: 'Charity'},
    ],

    IndividualSkill: {
        CalculateLevel: (level: number) => {
            return Math.floor(level / 20);
        }
    }
};
