import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
const schema = a.schema({
  UserProfile: a.model({
    userId: a.string().required(),
    name: a.string(),
    age: a.integer(),
    heightCm: a.float(),
    weightKg: a.float(),
    goalWeight: a.float(),
    activity: a.string(),
    dietPref: a.string(),
    units: a.string(),
    fastHours: a.integer(),
    burnGoal: a.integer(),
    calorieGoal: a.integer(),
    waterGoalL: a.float(),
    theme: a.string(),
  }).authorization(allow => [allow.owner()]),
  DailyLog: a.model({
    userId: a.string().required(),
    date: a.string().required(),
    meals: a.string(),
    exercises: a.string(),
    alcLog: a.string(),
    waterMl: a.float(),
    extraSugar: a.float(),
    coffeeType: a.string(),
    coffeeCount: a.integer(),
    fastingStart: a.string(),
    fastingCompleted: a.boolean(),
  }).authorization(allow => [allow.owner()]),
  WeightEntry: a.model({
    userId: a.string().required(),
    date: a.string().required(),
    kg: a.float().required(),
    bmi: a.float(),
  }).authorization(allow => [allow.owner()]),
});
export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema, authorizationModes: { defaultAuthorizationMode: 'userPool' } });
