const request = require("supertest");
const express = require("express");
const app = require("../src/server");
const nock = require("nock");

describe("test GET request for external API", () => {
    const mockJob = {
        id: "90da324b-acfb-4542-998a-b815968a352c",
        type: "Full Time",
        url:
            "https://jobs.github.com/positions/90da324b-acfb-4542-998a-b815968a352c",
        created_at: "Tue Nov 05 20:32:26 UTC 2019",
        company: "Ripcord",
        company_url: "http://Ripcord.com",
        location: "Hayward",
        title: "Software Engineer",
        how_to_apply:
            '<p>Click Here: <a href="https://careers.jobscore.com/apply_flow/standard_applications/apply?job_id=d8Rq6KTkGr6yftaKld2Sj6">https://careers.jobscore.com/apply_flow/standard_applications/apply?job_id=d8Rq6KTkGr6yftaKld2Sj6</a></p>\n',
        company_logo:
            "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBckYyIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4a27bc8b76b0147e5eb06bcaf6206846d37ba428/ripcord-logo-color-400X127%20(1).png"
    };

    it("sends a response of json format", done => {
        nock("https://jobs.github.com")
            .get("/positions.json")
            // .query({ location: "london" })
            .reply(200, mockJob);

        return request(app)
            .get("/jobs")
            .expect(200)
            .end(function(err, res) {
                console.log("RES", res.body);
                expect(res.body).toEqual(mockJob);
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
