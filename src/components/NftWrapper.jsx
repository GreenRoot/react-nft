import card_01 from '../img/card_01.webp';

// Cards info
const cards = [
	{
		id: 2592,
		img: 'https://lh3.googleusercontent.com/AcvahmJfGV63tC-wOr_v0jMxdttfBgbySxN4Q2va1f9I4_hnS6x2e0UTEVTXlvrALBmdFujAvJUIIMJXzbx_lxOgoPceyOa0gBR3zg',
		price: '35,21',
		name: 'Stoned Ninjas #2592',
		link: 'https://opensea.io/assets/solana/6w1jaz6LxvMYebKC4TPEwhjDSdUZkWidfQGGaXFqmE1i',
	},
	{
		id: 2593,
		img: 'https://lh3.googleusercontent.com/o38-NaczK3JTqQWT0k8s_EQc0J30k9czxyxsQyil2TUKbPWvf0kgnys5uIMDWRLqzwW7jmUaqYuxxS6Dqn0-VnOQR_DDV9UGXtMmLA',
		price: '25,55',
		name: 'Stoned Ninjas #2593',
		link: 'https://opensea.io/assets/solana/5EVyYnTSh6FmGen33iVZ3r6aDZJmuV2fkPQuammiFWCj',
	},
	{
		id: 2594,
		img: 'https://lh3.googleusercontent.com/sJAWQOy1Qe64S88olWDN-EtiWFr4oHUUC2nikIKWkF8Odaiwnod6KSXEpwOgzWS1k9GTblpMYkovqqVYV-e2yb3V-dE3-xXeZsKx',
		price: '15,12',
		name: 'Stoned Ninjas #2594',
		link: 'https://opensea.io/assets/solana/F5TZmD5YXhXjsgVHvVhJtwhuXnsgeYvkmpnZL7xD5Jyo',
	},
	{
		id: 2595,
		img: 'https://lh3.googleusercontent.com/3IK-V-WGc7SkX1cT-24ZRFChNXF5CmyY_kKlmuD0m6bLKNbqfv998Me8BegaTxMHM-W_lT3miO__jJdF70IjRihFiuDpOlYj99sa',
		price: '55,25',
		name: 'Stoned Ninjas #2595',
		link: 'https://opensea.io/assets/solana/8NG2Nvzydqso96msbFhf4abtirsp5gPVmSm5Kfu8EgJR',
	},
	{
		id: 2596,
		img: 'https://lh3.googleusercontent.com/zgMPRzcFoopw2LJUF8l7tMyzs06vVVJdMvE2znd--agHlIaaLNlS1pxQ-5bDlYnfdLIOU8Pim0VcZ8RvK64fVkCRTx9kRzDgNoCk',
		price: '31,02',
		name: 'Stoned Ninjas #2596',
		link: 'https://opensea.io/assets/solana/Ecb3QGrnBNPjV3C8A5jCaLUMsGhYMzw9HJA7WMLtLnm4',
	},
	{
		id: 2597,
		img: 'https://lh3.googleusercontent.com/8WEfvnAUzIQ0e8_1UXmSgMkbcEg8yQp_hhN89C1eBjunF3ShRMC1txQ8NfUJMWBO5cyei-Lfjd-KE9Gz_6kd6JhphLCcACuVEz1UqQ',
		price: '38,20',
		name: 'Stoned Ninjas #2597',
		link: 'https://opensea.io/assets/solana/FyPFgzjhnbjgN1MPA7MVi16qDAZTqHHGukeMJ1hHAm9G',
	},
	{
		id: 2598,
		img: 'https://lh3.googleusercontent.com/GMggifyhZRDGu4xx6axt15MXnfZTb0XjGTBd3OBFYEQVERFXchfkUSG3gTp2T9w6YXxLIxlpN6F-wTjYPFwlV-U5cMPhKrWhsOfNlw',
		price: '88,25',
		name: 'Stoned Ninjas #2598',
		link: 'https://opensea.io/assets/solana/BjXMQRavyhWsHfKubqWtFH8FA6ZKyjr3yN5dfRjFadU4',
	},
	{
		id: 2599,
		img: 'https://lh3.googleusercontent.com/c9Jh_RGoTV8QNNbptOuzUU1ahG3Ynwj1_6tlAlhNYMN_7srK4HZofHbE04JLe1NQp1oSzH9f-34Y4V-XJ7IZus9vsv19tn5iVrBruQ',
		price: '11,25',
		name: 'Stoned Ninjas #2599',
		link: 'https://opensea.io/assets/solana/5cvHwMtoi7spnzxYe5CnvxdJw33UQNgXNKVCZJvygEWi',
	},
];

function NftWrapper() {
	return (
		<div style={{ marginTop: 50 + 'px' }} className="nft-wrapper">
			<a href="#" className="back">
				Back to table
			</a>
			<div className="cards">
				{cards.map((index) => (
					<a key={index.id} target="_blank" href={index.link} className="card">
						<div className="card__img">
							<img src={index.img + '=w500'} alt={index.name} />
						</div>
						<div className="card__price">{`$ ${index.price}`}</div>
						<div className="card__name">{index.name}</div>
					</a>
				))}
			</div>
			<button className="btn load-more">Load more</button>
		</div>
	);
}

export default NftWrapper;
