async function trainHelper() {
    let res = {
        count: 0,
        loss: 0,
        acc: 0
    }
    for (let i in coll.data.input) {
        let h = await nn.train(coll.data.input[i], coll.data.output[i]);
        document.querySelector("#ind").innerHTML = `epoch : ${i} <br>loss : ${h.history.loss[0]}<br>accuracy : ${h.history.acc[0]}`;
        res.count++;
        res.loss += h.history.loss[0];
        res.acc += h.history.acc[0];
        delete h;
    }
    return res;
}

async function train(x) {
    await sleep(500);
    let res = await trainHelper();
    let i = 0;
    while ((res.loss / res.count) > x) {
        res = await trainHelper();
        document.querySelector("#whole").innerHTML = `epoch : ${i} <br>total loss : ${res.loss} <br>total accuracy : ${res.acc}<br> count : ${res.count} <br>loss : ${res.loss/res.count} <br> accuracy : ${res.acc/res.count}`;
        i++;
        if (!window.training_active) {
            break;
        }
    }
}

window.training_active = false;
window.load_model = false;

const startbtn = document.querySelector("#start");
const endbtn = document.querySelector("#end");
const savebtn = document.querySelector("#save");
const loadbtn = document.querySelector("#load");

startbtn.addEventListener("click", function (e) {
    // console.log(e,window.load_model);
    if (!window.load_model) {
        nn.createModel();
        nn.compileModel();
    }
    window.training_active = true;
    train(0.0001);
    setstate("state : training is started", true);
});

endbtn.addEventListener("click", function (e) {
    setstate("state : training is terminated", false);
    window.training_active = false;
});

loadbtn.addEventListener("click", async function (e) {
    window.load_model = true;
    await sleep(500);
    await nn.load(window.location.href.replace("TrainModel.html", "model/bb_agent_model.json"));
    setstate("state : model is loaded", true);
});

savebtn.addEventListener("click", function (e) {
    nn.save('downloads://bb_agent_model');
    setstate("state : model is saved", true);
})