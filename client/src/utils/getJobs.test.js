import dummyData from "../data/dummyData";
import getJobs from "./getJobs";
import axios from "axios";

jest.mock("axios");

test("getJobs calls axios with the right args and returns jobs", async () => {
    const resp = { data: dummyData };
    axios.get.mockReturnValue(resp);

    const jobsData = await getJobs("london", "python", true);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
        `http://localhost:4000/jobs?location=london&description=python&full_time=true`
    );
    expect(jobsData.length).toBe(9);
});
