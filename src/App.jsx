import './App.scss';
import { Row, Col } from 'react-bootstrap';
import { PrismicRichText, useSinglePrismicDocument } from '@prismicio/react';

function App() {
	const [document] = useSinglePrismicDocument('music');
	console.log(document);

	return (
		<div className="container">
			{document && (
				<Row>
					<Col>
						<PrismicRichText field={document.data.home_page_title} />
						<PrismicRichText field={document.data.home_page_title_description} />
						<Row>
							<Col>
							
							</Col>
						</Row>
						<PrismicRichText field={document.data.home_page_content} />
						
					</Col>
				</Row>
			)}
		</div>
	);
}

export default App;
