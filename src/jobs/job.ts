/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



import * as schedule from "node-schedule";
import testModel from "../schema/test.model";
class job {

    constructor() {

    }
    //Shop code refresh at 12:00 AM
    public shopRefresh() {
        var rule = new schedule.RecurrenceRule();
        rule.dayOfWeek = [0, new schedule.Range(0, 6)];
        rule.hour = 18;
        rule.minute = 0;
        schedule.scheduleJob(rule, async function () {
         
            const code = Math.floor(1000 + Math.random() * 9000);
            const set = {
                shopcode: code
            }
            await testModel.updateOne({_id: 1}, {$set: set});

        });
    }
}

export default new job();