<?php

class Paginate{
	public $offset = 0;
	public $limit;
	public $order;
	public $condition;
	public $params;
	
	function init(){
		$this->limit = (int)$this->params->limit;
		
		if(isset($this->params->offset))
			$this->offset = (int)$this->params->offset;
		
		if($this->params->sortInfo !=null){
			$sortField = pg_escape_string($this->params->sortInfo[0]->sortField);
			$sortDir = pg_escape_string($this->params->sortInfo[0]->sortDir);
			$this->order = "order by ".$sortField. " ".$sortDir;
		}else{
			$this->order = " order by id DESC";
		}
		
		$this->condition = $this->condition();
		
	}
	
	function condition(){
		$wh = "";		
		foreach($this->params->filters as $filter){
			$value = pg_escape_string($filter->value);
			if("contains" == $filter->comparison){
				$wh .= " and upper(".$filter->field.") like '%".strtoupper($value)."%'";
			}
			if("gt" == $filter->comparison){			
			}
			if("lt" == $filter->comparison){			
			}
			if("eq" == $filter->comparison){			
			}
			if("on" == $filter->comparison){			
			}
			if("after" == $filter->comparison){			
			}
			if("before" == $filter->comparison){			
			}
		}
		return $wh;
	}
}

?>