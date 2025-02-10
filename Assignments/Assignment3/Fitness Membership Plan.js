function choosePlan(wantsTrainer, wantsDietPlan) {
    if (wantsTrainer && wantsDietPlan) {
        return "VIP ($80/month) - Gym + Trainer + Diet Plan";
    } else if (wantsTrainer) {
        return "Premium ($50/month) - Gym + Personal Trainer";
    } else {
        return "Basic ($20/month) - Only Gym Access";
    }
}
let wantsTrainer = false;
let wantsDietPlan = false;

console.log(choosePlan(wantsTrainer, wantsDietPlan));

