import React from 'react';
import FizzBuzz from './FizzBuzz'; 
import UploadFile from './UploadFile'; 

const App = (props) =>
	<div className="container">
		<div className='jumbotron'>
          <h1>Phenomaly App</h1>
        </div>
		<div className="row">
			<div className="col-md-6">
				<FizzBuzz />
			</div>
			<div className="col-md-6">
				<UploadFile />
			</div>
		</div>
	</div>

export default App;