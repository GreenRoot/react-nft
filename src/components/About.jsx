function About() {
	return (
		<section id="about" className="about container-s">
			<h2 className="title">About the project</h2>
			<section className="features">
				<article className="features__item">
					<h3 className="features__title">Control the process</h3>
					<p className="features__text">
						Choose the level of risk and budget that suits you. Our service will analyze the data
						and show the NFTs that are right for you.
					</p>
				</article>
				<article className="features__item features__item-alter">
					<h3 className="features__title features__title-alter">Millions of NFTs daily</h3>
					<p className="features__text features__text-alter">
						The service is improving by analyzing millions of NFTs every day, which is why the
						predictions are so accurate. We guarantee results!
					</p>
				</article>
				<article className="features__item">
					<h3 className="features__title">Free use</h3>
					<p className="features__text">
						The service is absolutely free and does not require registration. Scroll down and start
						using right now!
					</p>
				</article>
			</section>
		</section>
	);
}

export default About;
