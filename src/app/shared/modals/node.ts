export class Node {
    data: any
    left: any
    right: any
    number: any;
}

export const tree: Node[] = [
    {
        data: "Does Your pain get worse after you eat a big meal?",
        left: 'Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?',
        right: 'Has your appetite decreased and have you lost 10 to 15 pounds over the last past few months without trying?',
        number: 1
    },
    {
        data: "Do you feel pressure in your upper abdomen that gets worse when you bend over or lie down at night?",
        left: "Then hiatal hernia",
        right: 'Is the pain relieved by antacids?',
        number: 2
    },
    {
        data: 'Then hiatal hernia',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Is the pain relieved by antacids?',
        left: 'THEN ULCER/HEARTBURN',
        right: 'Does the pain start in your upper middle or upper right abdomen and is it brought on by greasy or fatty foods?',
        number: 3
    },
    {
        data: 'THEN ULCER/HEARTBURN',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Does the pain start in your upper middle or upper right abdomen and is it brought on by greasy or fatty foods?',
        left: 'THEN GALLSTONE/CGIKECYSTITIS',
        right: 'Does your pain get worse when you’re under stress or do you alternate between loose and hard bowel movements?',
        number: 4
    },
    {
        data: 'THEN GALLSTONE/CGIKECYSTITIS',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Does your pain get worse when you’re under stress or do you alternate between loose and hard bowel movements?',
        left: 'THEN SPASTIC COLON',
        right: 'Do you have soft or diarrhea like bowel movements many times throughout the day and mucus or blood in your stools?',
        number: 5
    },
    {
        data: 'THEN SPASTIC COLON',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do you have soft or diarrhea like bowel movements many times throughout the day and mucus or blood in your stools?',
        left: 'THEN ULCERATIVE COLITIS',
        right: 'Do you have recurrent bouts of pain in the lower left side of your abdomen along with fever?',
        number: 6
    },
    {
        data: 'THEN ULCERATIVE COLITIS',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do you have recurrent bouts of pain in the lower left side of your abdomen along with fever?',
        left: 'THEN DIVERTICULITIS',
        right: 'Do you have bright red blood in or on your bowel movements?',
        number: 7
    },
    {
        data: '',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do you have bright red blood in or on your bowel movements?',
        left: 'THEN HEMORRHOID/CANCER',
        right: 'Has it been a few days or longer since you last had bowel movements and do you have strain when you have a bowel movement?',
        number: 8
    },
    {
        data: 'THEN HEMORRHOID/CANCER',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Has it been a few days or longer since you last had bowel movements and do you have strain when you have a bowel movement?',
        left: 'THEN CONSTIPATION',
        right: 'Has your appetite decreased and have you lost 10 to 15 pounds over the last past few months without trying?',
        number: 9
    },
    {
        data: 'THEN CONSTIPATION',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Has your appetite decreased and have you lost 10 to 15 pounds over the last past few months without trying?',
        left: 'THEN CANCER',
        right: 'Do your skin or eyes have yellow color or is your urine dark?',
        number: 10
    },
    {
        data: 'THEN CANCER',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do your skin or eyes have yellow color or is your urine dark?',
        left: 'THEN VIRAL HEPATITIS',
        right: 'Have you had fever sore throat or extreme tiredness?',
        number: 11
    },
    {
        data: 'THEN VIRAL HEPATITIS',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Have you had fever sore throat or extreme tiredness?',
        left: 'THEN MONONUCLEOSIS',
        right: 'Do you have abdominal bloating and discomfort made worse by milk or wheat products?',
        number: 12
    },
    {
        data: 'THEN MONONUCLEOSIS',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do you have abdominal bloating and discomfort made worse by milk or wheat products?',
        left: 'THEN MALABSORPTION or LACTOSE or INTOLERANCE or WHEAT INTOLLEARANCE (CELIAC DISEASE)',
        right: 'Are your bowel movements yellow and greasy and do they float in the toilet',
        number: 13
    },
    {
        data: 'THEN MALABSORPTION or LACTOSE or INTOLERANCE or WHEAT INTOLLEARANCE (CELIAC DISEASE)',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Are your bowel movements yellow and greasy and do they float in the toilet',
        left: 'THEN PANCREATIC INSUFFICEINCY',
        right: 'Do You have excess gas that is very foul smelling and occasional loose bowel movements?',
        number: 14
    },
    {
        data: 'THEN PANCREATIC INSUFFICEINCY',
        left: null,
        right: null,
        number: 0
    },
    {
        data: 'Do You have excess gas that is very foul smelling and occasional loose bowel movements?',
        left: 'THEN GIARDIASIS, OTHER BOWEL INFECTIONS or MALABSORPTION',
        right: 'THEN CONSULT YOUR DOCTOR',
        number: 15
    },
    {
        data: 'THEN CONSULT YOUR DOCTOR',
        left: null,
        right: null,
        number: 0
    }
]