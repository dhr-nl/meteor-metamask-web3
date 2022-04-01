import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
import ethers from 'ethers'


const getData = async () => {
    try {
        const jabbadabbadoo = await ethereum.request({
            method: 'eth_requestAccounts',
        })
        const response = await jabbadabbadoo
        const data = await response[0]
        console.log(data)
        const password = 'greedisgreat'
        const message = "A message from Khan, the emperor: It seems that thou hast an interest in becoming the grand master of the sandstorms. Without avail, please sign this message as proof of your GREED. My minions will check if you are deemed worthy for the whitelist."
        const sign = await ethereum.request({
            method: 'personal_sign',

            params: [data, message, password],
        });

        console.log(sign)

    } catch (err) {
        console.log(err)
    }

}






if (window.ethereum) {

    const ethersProvider = new ethers.providers.Web3Provider(window.ethereum, 'arbitrum');
    if (ethersProvider._network.name === !'arbitrum') {
        alert('wrong chain')
    }
    getData()

    Meteor.startup(() => {
        new App({
            target: document.getElementById('app')
        });
    });

if (!window.ethereum) {
        alert("no metamask, no vibe")
    }
}
