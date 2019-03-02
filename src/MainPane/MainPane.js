import React from 'react';
import TitleBar from './TitleBar';
import ListItemsViewer from './ListItemsViewer';
import CompletedItemsViewer from './CompletedItemsViewer';
import SearchResultViewer from './SearchResultViewer';

const MainPane = function (props) {
    return (
        <div className="bg-secondary m-1 col-9">
            <TitleBar currList={props.currList} onAddButtonClick={props.onAddButtonClick} />
            
            {
                props.searchMode ? 
                    <SearchResultViewer 
                        items={props.items}
                        onCheckboxClick={props.onCheckboxClick}
                        onItemClick={props.onItemClick}
                        selectedItem={props.selectedItem}
                        editModeItem={props.editModeItem}
                        onChangeItemEdit={props.onChangeItemEdit}
                        onBlur={props.onBlur}
                        onDelete={props.onDelete}
                        search={props.search}
                        onCloseSearch={props.onCloseSearch}
                    />
                    :
                    <div>
                        <CompletedItemsViewer
                            items={props.items}
                            currList={props.currList}
                            onCheckboxClick={props.onCheckboxClick}
                            onItemClick={props.onItemClick}
                        />
                        <ListItemsViewer
                            items={props.items}
                            currList={props.currList}
                            onCheckboxClick={props.onCheckboxClick}
                            onItemClick={props.onItemClick}
                            selectedItem={props.selectedItem}
                            editModeItem={props.editModeItem}
                            onChangeItemEdit={props.onChangeItemEdit}
                            onBlur={props.onBlur}
                            onDelete={props.onDelete}
                        />
                    </div>
            }
            
            
        </div>
    );
}

export default MainPane;