import {cat_enums, risks_enum} from "../utils/consts.js";

export const sampledata=[
    {
        Gender: 'male',
        HeightCm: 180,
        WeightKg: 87,
        bmi: -1,
        bmi_unit: 'kg/m2',
        risk: risks_enum.LOW_HEALTH_RISK,
        category: cat_enums.OVERWEIGHT
    },
    {
        Gender: 'female',
        HeightCm: 165,
        WeightKg: 72,
        bmi: 35.8,
        bmi_unit: 'kg/m2',
        risk: risks_enum.VERY_HIGH_HEALTH_RISK,
        category: cat_enums.NORMAL_WEIGHT
    }
]
