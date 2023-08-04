import React from "react"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './productFilter1.scss'
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';



function ProductFilter1() {
  return (
    <div className="accor-width">
    <Accordion>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className="pro-hd-font">Category</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <ul data-accordion className="categories">
              <li>Footwear<span className="count">123K</span>
                 <ul className="cate-flt-list">
                   <li className="subcat-font"><input type="checkbox" id="all"/><label htmlFor="all">All Footwear</label><span className="count">123K</span>
                 </li>
                   <li className="subcat-font"><input type="checkbox" id="low"/><label htmlFor="low">Low-Top Sneakers</label><span className="count">97K</span>
                  </li>
                  <li className="subcat-font"><input type="checkbox" id="high"/><label htmlFor="high">High-Top Sneakers</label><span className="count">93K</span>
                   </li>
                   <li className="subcat-font"><input type="checkbox" id="boots"/><label htmlFor="boots">Boots</label><span className="count">31K</span>
                  </li>
                  <li className="subcat-font"><input type="checkbox" id="casual" /><label htmlFor="casual">Casual Leather Shoes</label><span className="count">23K</span></li>
                 <li className="subcat-font"><input type="checkbox" id="formal" /><label htmlFor="formal">Formal Shoes</label><span className="count">18K</span></li>
                   <li className="subcat-font"><input type="checkbox" id="sand" /><label htmlFor="sand">Sandals</label><span className="count">2K</span></li>
                  <li className="subcat-font"><input type="checkbox" id="slip" /><label htmlFor="slip">Slip Ons</label><span className="count">456</span>
                   </li>
                  
               </ul>
              </li>
           </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className="pro-hd-font">Size</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <ul data-accordion className="categories">
              <li>Footwear<span className="count">123K</span>
                 <ul className="cate-flt-list">
                   <li className="subcat-font"><input type="checkbox" id="all"/><label htmlFor="all">All Footwear</label><span className="count">123K</span>
                 </li>
                   <li className="subcat-font"><input type="checkbox" id="low"/><label htmlFor="low">Low-Top Sneakers</label><span className="count">97K</span>
                  </li>
                  <li className="subcat-font"><input type="checkbox" id="high"/><label htmlFor="high">High-Top Sneakers</label><span className="count">93K</span>
                   </li>
                   <li className="subcat-font"><input type="checkbox" id="boots"/><label htmlFor="boots">Boots</label><span className="count">31K</span>
                  </li>
                  <li className="subcat-font"><input type="checkbox" id="casual" /><label htmlFor="casual">Casual Leather Shoes</label><span className="count">23K</span></li>
                 <li className="subcat-font"><input type="checkbox" id="formal" /><label htmlFor="formal">Formal Shoes</label><span className="count">18K</span></li>
                   <li className="subcat-font"><input type="checkbox" id="sand" /><label htmlFor="sand">Sandals</label><span className="count">2K</span></li>
                  <li className="subcat-font"><input type="checkbox" id="slip" /><label htmlFor="slip">Slip Ons</label><span className="count">456</span>
                   </li>
                  
               </ul>
              </li>
           </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <Typography className="pro-hd-font">Designer</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        {/* <input className="dsearch" type="text" placeholder="Search Designers" name="search" /> */}
        <div className="p-2 mb-3">
        <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Search
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
         <ul className="categories sh-list-flt">
           <li className="subcat-font"><input type="checkbox" id="sup" /><label htmlFor="sup">Supreme</label><span className="count">123K</span>
           </li>
           <li className="subcat-font"><input type="checkbox" id="bape" /><label htmlFor="bape">Bape</label><span className="count">97K</span>
          </li>
          <li className="subcat-font"><input type="checkbox" id="gucci" /><label htmlFor="gucci">Gucci</label><span className="count">93K</span>
           </li>
           <li className="subcat-font"><input type="checkbox" id="bal" /><label htmlFor="bal">Balenciaga</label><span className="count">31K</span>
           </li>
          <li className="subcat-font"><input type="checkbox" id="prada"/><label htmlFor="prada">Prada</label><span className="count">23K</span></li>
          <li className="subcat-font"><input type="checkbox" id="formal"/><label htmlFor="formal">Formal Shoes</label><span className="count">18K</span></li>
         </ul>
        </Typography>
      </AccordionDetails>
    </Accordion>

  </div>

  );
}

export default ProductFilter1;



